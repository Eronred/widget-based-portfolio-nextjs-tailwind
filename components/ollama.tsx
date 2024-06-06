import React from "react";

export default function Ollama({
    ...props
}) {
    return (
        <svg
            {...props}
            className='shadow-md overflow-hidden rounded-xl'
            width="70" height="70" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="60" rx="14" fill="white" />
            <g clip-path="url(#clip0_17_673)">
                <path d="M20.949 12.0859C20.2725 12.3835 19.7583 12.911 19.3118 13.7903C18.4864 15.4135 18.121 17.997 18.3781 20.3507L18.527 21.7845L17.688 22.6367C15.726 24.571 14.86 27.1275 15.2524 29.7111C15.4148 30.7256 15.9155 32.0918 16.3755 32.7275C16.6055 33.0657 16.6191 33.1198 16.4161 33.4309C15.9155 34.1884 15.5231 35.8522 15.4419 37.5024C15.3742 38.8957 15.4148 39.2879 15.6584 40.2618C15.9696 41.4657 16.1861 42.0068 16.5785 42.6019C16.8085 42.9672 16.8085 42.9942 16.4567 43.6841C16.2673 44.0763 16.0237 44.7662 15.929 45.2126C15.7395 46.1053 15.6854 48.9053 15.8478 49.1623C15.929 49.2841 16.3214 49.3382 17.0521 49.3382C18.1075 49.3382 18.1346 49.3247 18.0534 49.0271C17.661 47.5933 17.8775 45.8348 18.6487 44.2251C18.9464 43.6029 19.19 42.9536 19.19 42.8048C19.19 42.6425 18.9329 42.142 18.6352 41.6957C17.2821 39.6667 17.2144 36.9072 18.4458 34.3507C18.784 33.6473 19.0547 32.971 19.0547 32.8357C19.0547 32.714 18.8246 32.3082 18.5405 31.943C17.5257 30.6579 17.1468 29.0348 17.4851 27.4251C17.9045 25.4231 19.0005 23.9217 20.6243 23.083C21.4497 22.6772 21.6662 22.6231 22.7622 22.5961C23.4387 22.5826 24.0341 22.569 24.0882 22.569C24.1424 22.5555 24.3724 22.1903 24.6159 21.7304C25.3196 20.4183 26.5509 19.485 28.2423 18.9845C29.2571 18.6869 29.9607 18.7139 31.1921 19.1062C32.7752 19.6067 33.9389 20.54 34.6019 21.8386C34.9672 22.569 35.1837 22.6772 36.0903 22.5961C38.5665 22.3797 40.9344 24.314 41.5975 27.0869C41.9899 28.7777 41.6651 30.5227 40.6909 31.8753C40.3932 32.2811 40.1632 32.714 40.1632 32.8493C40.1632 32.971 40.4338 33.6473 40.7721 34.3507C42.0034 36.9072 41.9357 39.6667 40.5826 41.6957C40.2849 42.142 40.0279 42.6425 40.0279 42.8048C40.0279 42.9536 40.2714 43.6029 40.5691 44.2251C41.3404 45.8348 41.5569 47.5933 41.1645 49.0271C41.0833 49.3247 41.1103 49.3382 42.1658 49.3382C42.8964 49.3382 43.2888 49.2841 43.37 49.1623C43.5324 48.9053 43.4783 46.1053 43.2888 45.2126C43.1941 44.7662 42.9506 44.0763 42.7611 43.6841C42.4364 43.0483 42.4229 42.9401 42.5988 42.6696C43.0047 42.0338 43.2753 41.344 43.5595 40.2618C44.0872 38.2328 43.7218 34.9729 42.8017 33.4038C42.5717 33.0116 42.5717 32.9845 42.8288 32.6193C42.9776 32.4029 43.2753 31.7942 43.4918 31.2802C43.8571 30.3874 43.8842 30.2116 43.8707 28.5072C43.8707 26.8029 43.8436 26.6 43.4647 25.5855C42.9641 24.2869 42.4905 23.5565 41.4621 22.542L40.6909 21.798L40.8397 20.3507C41.0968 17.997 40.7315 15.4135 39.9061 13.7903C39.2972 12.5864 38.3365 11.8695 37.3622 11.8695C36.4421 11.883 35.3461 12.7352 34.7643 13.8714C34.3989 14.6019 33.9389 16.1439 33.8441 16.9014C33.8036 17.2666 33.7088 17.5912 33.6547 17.6318C33.6006 17.6589 33.1405 17.5101 32.6534 17.2937C30.7185 16.4144 28.7023 16.3874 26.7403 17.1854C26.1179 17.4424 25.5767 17.6318 25.5361 17.6048C25.4955 17.5777 25.4143 17.2666 25.3737 16.9014C25.279 16.1439 24.8189 14.6019 24.4536 13.8714C23.8717 12.7081 22.7622 11.8695 21.8285 11.883C21.612 11.883 21.2061 11.9777 20.949 12.0859ZM22.4645 14.8318C22.8975 15.6028 23.2222 16.9961 23.344 18.6328C23.4523 20.2289 23.3846 20.3236 22.1398 20.4318C21.5985 20.4859 21.0167 20.5536 20.8543 20.6077C20.5837 20.6753 20.5566 20.6212 20.4754 19.769C20.2319 17.5777 21.2061 13.8308 21.9368 14.1149C22.0315 14.142 22.2615 14.4666 22.4645 14.8318ZM38.2147 15.4405C38.6342 16.5903 38.8777 18.5787 38.7424 19.769C38.6612 20.6212 38.6342 20.6753 38.3635 20.6077C38.2012 20.5536 37.6193 20.4859 37.0781 20.4318C36.2797 20.3642 36.0632 20.2966 35.9415 20.0801C35.7656 19.7284 35.8738 17.8618 36.1715 16.4685C36.3745 15.5352 36.9022 14.3584 37.2404 14.142C37.484 13.9796 37.8629 14.4801 38.2147 15.4405Z" fill="black" />
                <path d="M27.7418 28.0473C26.3346 28.4261 24.9409 29.4676 24.2237 30.6715C23.899 31.2261 23.8584 31.4155 23.8584 32.6329C23.8584 33.8638 23.8855 34.0261 24.2102 34.5266C24.792 35.3923 25.3874 35.9198 26.3346 36.3797C26.931 36.6734 27.5869 36.8261 28.2517 36.8261H29.6091H30.9665C31.6313 36.8261 32.2872 36.6734 32.8836 36.3797C33.8308 35.9198 34.4262 35.4058 35.008 34.5401C35.3328 34.0532 35.3598 33.8908 35.3598 32.6464C35.3598 31.4019 35.3192 31.2261 34.9945 30.6715C34.2638 29.4406 32.8701 28.4126 31.4223 28.0338C30.448 27.7768 28.689 27.7903 27.7418 28.0473ZM30.4886 29.3324C33.5331 29.887 34.9945 32.4705 33.3166 34.3237C32.5454 35.1759 31.6523 35.4464 29.6091 35.4464C28.2019 35.4464 27.7959 35.3923 27.1465 35.1488C25.8475 34.6483 24.9815 33.3498 25.225 32.2541C25.5363 30.7932 26.6729 29.8058 28.5266 29.3729C29.4873 29.1565 29.5415 29.1565 30.4886 29.3324Z" fill="black" />
                <path d="M28.4995 31.3614C28.1341 31.5643 28.2018 31.9971 28.6618 32.4164C28.946 32.6599 29.0542 32.8628 28.9866 33.0116C28.8513 33.3633 29.0407 33.8908 29.3384 33.9855C29.8255 34.1343 30.1503 33.8367 30.1503 33.228C30.1503 32.7952 30.2314 32.6058 30.4885 32.4029C30.9486 32.0377 30.9621 31.3884 30.5021 31.2667C30.3262 31.2261 30.042 31.2532 29.8932 31.3478C29.6902 31.4425 29.5278 31.4561 29.3519 31.3478C29.0272 31.1855 28.7972 31.1855 28.4995 31.3614Z" fill="black" />
                <path d="M21.3553 28.4802C20.5164 29.3324 20.7329 30.6445 21.7613 30.9556C22.2484 31.1044 22.3837 31.0908 22.7896 30.8744C23.3444 30.5768 23.8586 29.6164 23.7233 29.1565C23.3985 28.1015 22.1131 27.7362 21.3553 28.4802Z" fill="black" />
                <path d="M35.9417 28.4667C35.7522 28.6831 35.5493 28.9807 35.4952 29.1565C35.3598 29.6164 35.874 30.5768 36.4288 30.8744C36.8347 31.0908 36.97 31.1044 37.4572 30.9556C38.4855 30.6445 38.702 29.3324 37.8631 28.4802C37.3218 27.9391 36.4423 27.9391 35.9417 28.4667Z" fill="black" />
            </g>
            <defs>
                <clipPath id="clip0_17_673">
                    <rect width="28.9565" height="39.9035" fill="white" transform="translate(15.1305 9.43475)" />
                </clipPath>
            </defs>
        </svg>
    )
}