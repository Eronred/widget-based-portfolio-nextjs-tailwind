import { motion } from 'framer-motion';
import React from 'react'
import classNames from 'classnames';
import { Copy, Check } from 'lucide-react';
import PressableIcon from '../pressable-icon';
import { moveInAnimationVariant } from '@/lib/utils/animation';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { web3walletAddress } from '@/lib/utils/constants'; web3walletAddress

interface Wallet {
    id: string;
    name: string;
    logo: string;
    qr: string;
}


const WALLET_SELECTION_VARIANTS = {
    isSelected: {
        scale: 1,
    },
    select: {
        scale: 0.9,
    },
};

const SPRING_OPTIONS = {
    type: "spring",
    damping: 20,
    stiffness: 400,
    mass: 1,
};


const COPIED_VARIANT = {
    copied: {
        scale: 1.06,
    },
    copy: {
        scale: 1,
        opacity: 0.9
    }
}

const Web3WalletWidget: React.FC = () => {
    const wallets: Wallet[] = [
        {
            id: 'uniswap',
            name: 'Uniswap',
            logo: 'https://app.uniswap.org/favicon.png',
            qr: './wallets/uniswap.png'
        },
        {
            id: 'rainbow',
            name: 'Raindow',
            logo: './icons/rainbow.svg',
            qr: './wallets/rainbow.png'
        },
        {
            id: 'binance',
            name: 'Binance',
            logo: './icons/binance.svg',
            qr: './wallets/binance.png'
        },
    ]

    const [selectedWallet, setSelectedWallet] = React.useState<string>("rainbow");
    const isSelectedWalletBinance = selectedWallet === 'binance';
    const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 1000 })


    const handleCopy = () => {
        copyToClipboard(web3walletAddress);
    }

    return (
        <motion.div
            variants={moveInAnimationVariant}
            className={classNames(` aspect-square rounded-3xl relative`,
                selectedWallet === 'rainbow' ? 'bg-rainbow-brand'
                    : selectedWallet === 'uniswap' ? 'bg-uniswap-brand'
                        : 'bg-binance-brand'
            )}
        >
            <div className=' w-full h-full flex flex-col items-center justify-center gap-2 p-6'>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <motion.h2
                        variants={COPIED_VARIANT}
                        animate={isCopied ? 'copied' : 'copy'}
                        className={
                            classNames(`text-xl`,
                                isSelectedWalletBinance ? 'text-black' : 'text-gray-100')
                        }
                    >
                        {
                            isCopied ? 'Copied!' : '0x5...06AB3'
                        }
                    </motion.h2>
                    <PressableIcon
                        onClick={handleCopy}
                    >
                        {
                            isCopied ?
                                <Check size={20}
                                    color={isSelectedWalletBinance ? 'black' : 'white'} />
                                :
                                <Copy size={20}
                                    color={isSelectedWalletBinance ? 'black' : 'white'} />
                        }
                    </PressableIcon>
                </div>
                <div
                    className='w-full h-full flex items-center justify-center'
                >
                    <div className="flex flex-row items-center justify-center relative">
                        {
                            wallets.map((_) => (
                                <motion.img
                                    key={_.id}
                                    animate={selectedWallet === _.id ? {
                                        scale: 1,
                                        rotate: 0,
                                        zIndex: 1,
                                    } : {
                                        scale: 0.9,
                                        rotate: 20,
                                        zIndex: 0,
                                    }}
                                    transition={SPRING_OPTIONS}
                                    src={wallets.find(_ => _.id === selectedWallet)?.qr}
                                    className={classNames(`max-w-[210px] max-h-[210px] sm:max-w-[200px] sm:max-h-[200px] object-cover overflow-hidden absolute`)}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='absolute top-1/2 right-1 transform -translate-y-1/2 z-50 flex flex-col items-center'>
                {
                    wallets.map((_, index) => (
                        <motion.img
                            key={index}
                            variants={WALLET_SELECTION_VARIANTS}
                            animate={selectedWallet === _.id ? 'isSelected' : 'select'}
                            onClick={() => setSelectedWallet(_.id)}
                            src={_.logo}
                            className={classNames(`w-10 h-10 rounded-full cursor-pointer overflow-hidden border-2`,
                                selectedWallet === _.id ? 'border-gray-100' : 'border-transparent')
                            }
                            alt={_.name}
                        />
                    ))
                }
            </div>
        </motion.div>
    );
};

export default Web3WalletWidget;