import { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export const SidebarIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.6197 15.6169H15.3737C16.7298 15.6169 17.4329 14.9201 17.4329 13.5829V5.93638C17.4329 4.59919 16.7298 3.90234 15.3737 3.90234H4.6197C3.26367 3.90234 2.56055 4.59291 2.56055 5.93638V13.5829C2.56055 14.9201 3.26367 15.6169 4.6197 15.6169ZM4.69503 14.3864C4.11119 14.3864 3.79102 14.0851 3.79102 13.4761V6.04311C3.79102 5.43415 4.11119 5.12653 4.69503 5.12653H15.2984C15.876 5.12653 16.2024 5.43415 16.2024 6.04311V13.4761C16.2024 14.0851 15.876 14.3864 15.2984 14.3864H4.69503ZM5.20354 13.4699H6.98019C7.33803 13.4699 7.47614 13.3255 7.47614 12.9676V6.55162C7.47614 6.19378 7.33803 6.04311 6.98019 6.04311H5.20354C4.8457 6.04311 4.70759 6.19378 4.70759 6.55162V12.9676C4.70759 13.3255 4.8457 13.4699 5.20354 13.4699Z" />
  </svg>
);

export const SettingIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.35965 16.5772H10.6341C11.1551 16.5772 11.5632 16.2507 11.6888 15.7485L11.9399 14.6498L12.1031 14.5871L13.0636 15.1835C13.5031 15.4597 14.0241 15.3844 14.3945 15.014L15.2734 14.135C15.6501 13.7584 15.7129 13.2436 15.4367 12.8104L14.8403 11.8499L14.903 11.6992L16.0017 11.4418C16.4976 11.3163 16.8241 10.9082 16.8241 10.3871V9.15039C16.8241 8.62933 16.5039 8.22127 16.0017 8.09571L14.9093 7.83204L14.8465 7.66881L15.4429 6.71457C15.7192 6.28139 15.6564 5.76661 15.2797 5.38365L14.4008 4.50475C14.0367 4.13435 13.5156 4.06529 13.0762 4.33524L12.1157 4.92537L11.9399 4.86259L11.6888 3.75768C11.5632 3.25545 11.1551 2.93527 10.6341 2.93527H9.35965C8.83231 2.93527 8.42425 3.25545 8.30497 3.75768L8.05385 4.86259L7.87807 4.92537L6.91755 4.33524C6.47182 4.06529 5.95703 4.13435 5.59291 4.50475L4.70773 5.38365C4.33733 5.76661 4.26828 6.28139 4.5445 6.71457L5.1409 7.66881L5.07813 7.83204L3.99205 8.09571C3.48982 8.22127 3.16964 8.62933 3.16964 9.15039V10.3871C3.16964 10.9082 3.49609 11.3163 3.99205 11.4418L5.09068 11.6992L5.14718 11.8499L4.55078 12.8104C4.27455 13.2436 4.34361 13.7584 4.71401 14.135L5.59919 15.014C5.96331 15.3844 6.48438 15.4597 6.92383 15.1835L7.88435 14.5871L8.05385 14.6498L8.30497 15.7485C8.42425 16.2507 8.83231 16.5772 9.35965 16.5772ZM9.52288 15.422C9.41616 15.422 9.35965 15.3781 9.3471 15.2839L8.97042 13.7395C8.57492 13.6454 8.19197 13.4821 7.88435 13.2875L6.52832 14.1225C6.44671 14.1727 6.37137 14.1664 6.29604 14.0911L5.63686 13.4319C5.56152 13.3629 5.56152 13.2875 5.61175 13.2059L6.44671 11.8499C6.27093 11.5486 6.1077 11.1719 6.01353 10.7764L4.46289 10.406C4.36872 10.3934 4.3185 10.3369 4.3185 10.2302V9.30106C4.3185 9.18806 4.36244 9.14412 4.46289 9.11901L6.00726 8.75489C6.10142 8.33427 6.28348 7.94504 6.44043 7.66253L5.60547 6.31906C5.55525 6.23117 5.55525 6.15584 5.6243 6.0805L6.28976 5.4276C6.3651 5.35854 6.43415 5.34599 6.52832 5.40249L7.87179 6.22489C8.1543 6.04911 8.57492 5.87333 8.9767 5.77288L9.3471 4.22852C9.35965 4.13435 9.41616 4.08413 9.52288 4.08413H10.4708C10.5776 4.08413 10.6278 4.12807 10.6466 4.22852L11.0233 5.77916C11.4314 5.87961 11.8018 6.04911 12.1157 6.22489L13.4591 5.40249C13.5533 5.35226 13.6223 5.35854 13.6977 5.43388L14.3631 6.08678C14.4385 6.15584 14.4385 6.23117 14.382 6.31906L13.5533 7.66253C13.704 7.94504 13.8923 8.33427 13.9865 8.75489L15.5308 9.11901C15.6313 9.14412 15.6689 9.18806 15.6689 9.30106V10.2302C15.6689 10.3369 15.625 10.3934 15.5308 10.406L13.9802 10.7764C13.886 11.1719 13.7165 11.5548 13.5407 11.8499L14.3757 13.1996C14.4259 13.2875 14.4259 13.3566 14.3506 13.4256L13.6914 14.0911C13.6161 14.1664 13.5407 14.1727 13.4591 14.1225L12.1094 13.2875C11.7955 13.4821 11.4376 13.6391 11.0233 13.7395L10.6466 15.2839C10.6278 15.3781 10.5776 15.422 10.4708 15.422H9.52288ZM10 12.1387C11.3058 12.1387 12.3793 11.0652 12.3793 9.75307C12.3793 8.45355 11.3058 7.38003 10 7.38003C8.68792 7.38003 7.60812 8.45355 7.60812 9.75307C7.60812 11.0652 8.68792 12.1387 10 12.1387ZM10 11.0526C9.28432 11.0526 8.70048 10.4688 8.70048 9.75307C8.70048 9.04995 9.2906 8.4661 10 8.4661C10.6968 8.4661 11.2807 9.04995 11.2807 9.75307C11.2807 10.4625 10.6968 11.0526 10 11.0526Z" />
  </svg>
);

export const AdminIcon = (props: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.57324 15.4121C6.57324 18.6113 8.33105 19.8682 13.376 22.6279C13.6045 22.751 13.8418 22.8125 13.9912 22.8125C14.1494 22.8125 14.3867 22.751 14.6152 22.6279C19.6602 19.877 21.418 18.6113 21.418 15.4121V8.75879C21.418 7.72168 21.0137 7.35254 20.1436 6.9834C19.168 6.57031 15.8721 5.41016 14.9053 5.09375C14.624 4.99707 14.29 4.93555 13.9912 4.93555C13.7012 4.93555 13.3672 5.01465 13.0771 5.09375C12.1191 5.35742 8.82324 6.5791 7.84766 6.9834C6.97754 7.34375 6.57324 7.72168 6.57324 8.75879V15.4121ZM8.2168 15.0781V13.6543H13.9912V6.58789C14.123 6.58789 14.2549 6.61426 14.4482 6.68457C15.6348 7.15039 18.1396 8.03809 19.458 8.5127C19.7041 8.60059 19.7656 8.73242 19.7656 9.04004V13.6543H13.9912V20.9668C13.8682 20.9668 13.7451 20.9229 13.4902 20.7646C9.46484 18.3213 8.2168 17.6533 8.2168 15.0781Z" />
  </svg>
);

export const LinkIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0934 3.77944L16.5074 5.19344C17.0063 5.69453 17.2861 6.37294 17.2856 7.08C17.2851 7.78705 17.0043 8.46506 16.5048 8.96544L14.6194 10.8508C14.3385 11.1287 13.9822 11.318 13.5946 11.3951C13.2071 11.4723 12.8054 11.4339 12.4394 11.2848C12.276 11.2171 12.1461 11.0874 12.0783 10.9239C12.0106 10.7605 12.0105 10.5769 12.0781 10.4134C12.1457 10.25 12.2755 10.1201 12.4389 10.0523C12.6024 9.98456 12.786 9.98448 12.9494 10.0521C13.0716 10.1014 13.2055 10.114 13.3347 10.0883C13.4639 10.0626 13.5828 9.99974 13.6768 9.90744L15.5648 8.02544C15.6886 7.90163 15.7869 7.75462 15.8539 7.59281C15.921 7.43101 15.9555 7.25759 15.9555 7.08244C15.9555 6.9073 15.921 6.73388 15.8539 6.57207C15.7869 6.41027 15.6886 6.26326 15.5648 6.13944L14.1508 4.72544C14.027 4.60158 13.88 4.50331 13.7181 4.43627C13.5563 4.36923 13.3829 4.33473 13.2078 4.33473C13.0326 4.33473 12.8592 4.36923 12.6974 4.43627C12.5356 4.50331 12.3886 4.60158 12.2648 4.72544L10.3794 6.61078C10.2867 6.70378 10.2235 6.82212 10.1977 6.95092C10.172 7.07973 10.1849 7.21327 10.2348 7.33478C10.2682 7.41572 10.2854 7.50245 10.2853 7.59002C10.2852 7.6776 10.2679 7.7643 10.2343 7.84518C10.2008 7.92606 10.1516 7.99953 10.0896 8.06141C10.0276 8.12328 9.95405 8.17233 9.87311 8.20578C9.79217 8.23922 9.70544 8.2564 9.61787 8.25632C9.53029 8.25624 9.44359 8.23892 9.36271 8.20533C9.28183 8.17175 9.20836 8.12256 9.14648 8.06059C9.08461 7.99861 9.03556 7.92505 9.00211 7.84411C8.85138 7.47856 8.81216 7.07658 8.88939 6.68878C8.96661 6.30098 9.15684 5.9447 9.43611 5.66478L11.3221 3.77944C11.8227 3.2803 12.5008 3 13.2078 3C13.9147 3 14.5928 3.2803 15.0934 3.77944ZM7.31478 12.9714C7.44073 13.0947 7.60992 13.1637 7.78611 13.1637C7.96231 13.1637 8.1315 13.0947 8.25744 12.9714L13.4434 7.78611C13.5649 7.66038 13.6321 7.49197 13.6306 7.31718C13.629 7.14238 13.5589 6.97517 13.4353 6.85157C13.3117 6.72796 13.1445 6.65785 12.9697 6.65633C12.7949 6.65481 12.6265 6.72201 12.5008 6.84344L7.31478 12.0288C7.1898 12.1538 7.11959 12.3233 7.11959 12.5001C7.11959 12.6769 7.1898 12.8464 7.31478 12.9714ZM10.4141 12.0808C10.3331 12.1142 10.2594 12.1632 10.1974 12.2251C10.1353 12.287 10.0861 12.3605 10.0525 12.4414C10.0188 12.5223 10.0015 12.6091 10.0014 12.6967C10.0014 12.7844 10.0186 12.8711 10.0521 12.9521C10.1026 13.074 10.1158 13.208 10.09 13.3374C10.0643 13.4667 10.0007 13.5855 9.90744 13.6788L8.02211 15.5648C7.77207 15.8147 7.433 15.9552 7.07944 15.9552C6.72589 15.9552 6.38681 15.8147 6.13678 15.5648L4.72211 14.1508C4.59824 14.027 4.49998 13.8799 4.43294 13.7181C4.3659 13.5563 4.3314 13.3829 4.3314 13.2078C4.3314 13.0326 4.3659 12.8592 4.43294 12.6974C4.49998 12.5356 4.59824 12.3886 4.72211 12.2648L6.61011 10.3794C6.70401 10.287 6.82291 10.2241 6.95214 10.1983C7.08138 10.1726 7.21532 10.1853 7.33744 10.2348C7.50091 10.3022 7.68447 10.302 7.84775 10.2341C8.01103 10.1662 8.14066 10.0362 8.20811 9.87278C8.27556 9.70932 8.27532 9.52575 8.20743 9.36247C8.13954 9.19919 8.00957 9.06956 7.84611 9.00211C7.48017 8.85405 7.07889 8.81632 6.69176 8.89355C6.30463 8.97079 5.94856 9.15963 5.66744 9.43678L3.77944 11.3221C3.2803 11.8227 3 12.5008 3 13.2078C3 13.9147 3.2803 14.5928 3.77944 15.0934L5.19411 16.5074C5.69419 17.0074 6.37234 17.2882 7.07944 17.2882C7.78655 17.2882 8.4647 17.0074 8.96478 16.5074L10.8508 14.6221C11.13 14.342 11.3202 13.9856 11.3975 13.5977C11.4747 13.2099 11.4355 12.8078 11.2848 12.4421C11.2172 12.2788 11.0875 12.1489 10.9243 12.0812C10.761 12.0134 10.5775 12.0133 10.4141 12.0808Z"
    />
  </svg>
);

export const LandingIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.12388 8.71093L14.8905 11.6113C16.1335 11.9503 17.3828 11.5925 17.5586 10.6445C17.6967 9.76562 16.7487 8.94949 15.5873 8.72348L11.6511 7.94502C11.3874 7.8948 11.2367 7.79436 11.0484 7.53068L7.73995 2.75948C7.62695 2.59625 7.47 2.48953 7.28167 2.43931L6.82966 2.3263C6.64132 2.28236 6.49693 2.45186 6.54715 2.67787L7.59556 7.14145L5.51758 6.73339L3.45215 4.32268C3.32031 4.16573 3.16964 4.12178 2.9248 4.16573L2.67996 4.21595C2.49163 4.2599 2.39746 4.41057 2.43513 4.58635L3.10058 7.83202C3.19475 8.27148 3.55259 8.56026 4.12388 8.71093ZM3.19475 15.4785H16.799C17.138 15.4785 17.4142 15.2023 17.4142 14.8633C17.4142 14.5243 17.138 14.248 16.799 14.248H3.19475C2.85575 14.248 2.57952 14.5243 2.57952 14.8633C2.57952 15.2023 2.85575 15.4785 3.19475 15.4785Z" />
  </svg>
);

export const MagnifyIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.95156 13.5953C9.94974 13.5953 10.8852 13.2939 11.6636 12.7792L14.4133 15.5352C14.5954 15.7109 14.8277 15.7988 15.0788 15.7988C15.5999 15.7988 15.9828 15.3908 15.9828 14.876C15.9828 14.6374 15.9012 14.4051 15.7254 14.2294L12.9945 11.4859C13.5595 10.6823 13.8923 9.70926 13.8923 8.65458C13.8923 5.93624 11.6699 3.71387 8.95156 3.71387C6.2395 3.71387 4.01085 5.93624 4.01085 8.65458C4.01085 11.3729 6.23323 13.5953 8.95156 13.5953ZM8.95156 12.2769C6.96146 12.2769 5.32921 10.6447 5.32921 8.65458C5.32921 6.66448 6.96146 5.03223 8.95156 5.03223C10.9417 5.03223 12.5739 6.66448 12.5739 8.65458C12.5739 10.6447 10.9417 12.2769 8.95156 12.2769Z" />
  </svg>
);

export const SlideshowIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.87543 3.375H14.1246C14.0806 2.80999 13.7479 2.50865 13.139 2.50865H6.86106C6.2521 2.50865 5.91937 2.80999 5.87543 3.375ZM4.64496 5.20187H15.3613C15.2734 4.60547 14.9658 4.26019 14.2941 4.26019H5.70592C5.03419 4.26019 4.73285 4.60547 4.64496 5.20187ZM5.26019 17.0232H14.7273C16.0833 17.0232 16.799 16.32 16.799 14.9766V8.28432C16.799 6.94085 16.0833 6.23773 14.7273 6.23773H5.26019C3.89789 6.23773 3.19476 6.93457 3.19476 8.28432V14.9766C3.19476 16.32 3.89789 17.0232 5.26019 17.0232ZM5.34181 15.7676C4.76424 15.7676 4.44407 15.4725 4.44407 14.8636V8.39732C4.44407 7.78837 4.76424 7.48703 5.34181 7.48703H14.6457C15.2232 7.48703 15.5434 7.78837 15.5434 8.39732V14.8636C15.5434 15.4725 15.2232 15.7676 14.6457 15.7676H13.6914C13.1641 14.4681 11.7202 13.5766 9.99373 13.5766C8.27359 13.5766 6.82967 14.4681 6.30232 15.7676H5.34181ZM9.99373 12.6537C11.0924 12.6663 11.9524 11.7309 11.9524 10.5193C11.9524 9.3704 11.0924 8.42244 9.99373 8.42244C8.90138 8.42244 8.03503 9.3704 8.0413 10.5193C8.04758 11.7309 8.8951 12.6412 9.99373 12.6537Z" />
  </svg>
);

export const WorkIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.90236 15.8743H15.0977C16.4474 15.8743 17.138 15.1963 17.138 13.8591V7.70675C17.138 6.37584 16.4474 5.69155 15.0977 5.69155H13.7605V5.02609C13.7605 4.06557 13.1452 3.49428 12.0968 3.49428H7.9032C6.85479 3.49428 6.23955 4.06557 6.23955 5.02609V5.69155H4.90236C3.55889 5.69155 2.86204 6.37584 2.86204 7.70675V13.8591C2.86204 15.1963 3.55889 15.8743 4.90236 15.8743ZM7.41352 5.08887C7.41352 4.76242 7.63953 4.55525 7.98481 4.55525H12.0152C12.3668 4.55525 12.5865 4.76242 12.5865 5.08887V5.69155H7.41352V5.08887ZM4.11135 7.74442C4.11135 7.17941 4.40641 6.8969 4.95258 6.8969H15.0475C15.5936 6.8969 15.8824 7.17941 15.8824 7.74442V8.56683C14.1497 9.16323 12.1596 9.45829 10 9.45829C7.84042 9.45829 5.85032 9.16323 4.11135 8.56683V7.74442ZM4.95258 14.6689C4.40641 14.6689 4.11135 14.3927 4.11135 13.8214V9.77846C5.39832 10.1677 6.79829 10.4188 8.25476 10.5255V11.0215C8.25476 11.4986 8.53099 11.7623 9.02067 11.7623H10.9794C11.469 11.7623 11.739 11.4986 11.739 11.0215V10.5255C13.2017 10.4188 14.5954 10.1677 15.8824 9.77846V13.8214C15.8824 14.3927 15.5936 14.6689 15.0475 14.6689H4.95258Z" />
  </svg>
);

export const DiscordIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.7756 4.43856C14.7133 3.92699 13.5742 3.55008 12.3832 3.33421C12.3615 3.33005 12.3398 3.34046 12.3286 3.36128C12.1821 3.63476 12.0199 3.99154 11.9062 4.27196C10.6252 4.07067 9.35075 4.07067 8.09599 4.27196C7.98233 3.98531 7.81417 3.63476 7.66701 3.36128C7.65583 3.34115 7.63417 3.33074 7.61248 3.33421C6.42211 3.54939 5.28299 3.9263 4.22006 4.43856C4.21086 4.44272 4.20297 4.44967 4.19774 4.45869C2.03706 7.84669 1.44516 11.1514 1.73553 14.4152C1.73684 14.4311 1.74538 14.4464 1.75721 14.4561C3.18276 15.5549 4.56365 16.222 5.9189 16.6641C5.94059 16.6711 5.96357 16.6627 5.97737 16.644C6.29796 16.1845 6.58373 15.7 6.82875 15.1905C6.84321 15.1607 6.82941 15.1253 6.79985 15.1135C6.34657 14.933 5.91496 14.7129 5.49977 14.4631C5.46693 14.4429 5.4643 14.3936 5.49451 14.37C5.58188 14.3013 5.66928 14.2298 5.7527 14.1576C5.7678 14.1445 5.78883 14.1417 5.80658 14.15C8.53416 15.457 11.4871 15.457 14.1825 14.15C14.2002 14.141 14.2213 14.1438 14.237 14.1569C14.3205 14.2291 14.4078 14.3013 14.4959 14.37C14.5261 14.3936 14.5241 14.4429 14.4913 14.4631C14.0761 14.7178 13.6445 14.933 13.1905 15.1128C13.161 15.1246 13.1478 15.1607 13.1623 15.1905C13.4126 15.6993 13.6983 16.1838 14.013 16.6433C14.0262 16.6627 14.0498 16.6711 14.0715 16.6641C15.4333 16.222 16.8142 15.5549 18.2397 14.4561C18.2522 14.4464 18.2601 14.4318 18.2614 14.4159C18.6089 10.6426 17.6794 7.36498 15.7972 4.45938C15.7926 4.44967 15.7848 4.44272 15.7756 4.43856ZM7.23607 12.4279C6.41488 12.4279 5.73824 11.6366 5.73824 10.6648C5.73824 9.69305 6.40176 8.90177 7.23607 8.90177C8.07693 8.90177 8.74702 9.7 8.73388 10.6648C8.73388 11.6366 8.07036 12.4279 7.23607 12.4279ZM12.774 12.4279C11.9529 12.4279 11.2762 11.6366 11.2762 10.6648C11.2762 9.69305 11.9397 8.90177 12.774 8.90177C13.6149 8.90177 14.285 9.7 14.2719 10.6648C14.2719 11.6366 13.6149 12.4279 12.774 12.4279Z" />
  </svg>
);

export const EyeglassesIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.57435 13.6549C7.53306 13.6549 9.12765 12.0792 9.1967 10.1644C9.46665 10.064 9.76171 10.0263 10.0003 10.0263C10.2451 10.0263 10.5339 10.064 10.8038 10.1644C10.8792 12.098 12.4675 13.6549 14.4325 13.6549C16.297 13.6549 17.8351 12.2487 18.0423 10.4469H18.8144C19.1158 10.4469 19.2288 10.2712 19.2288 10.02V9.73754C19.2288 9.48015 19.1158 9.31693 18.8144 9.31693H17.9983C17.6656 7.65956 16.1966 6.39771 14.4325 6.39771C12.7437 6.39771 11.3375 7.54656 10.9231 9.09092C10.6281 8.97792 10.2828 8.93397 10.0003 8.93397C9.71777 8.93397 9.37249 8.97792 9.07742 9.09092C8.66308 7.54656 7.25055 6.39771 5.57435 6.39771C3.81654 6.39771 2.35379 7.64701 2.01478 9.28554H1.19238C0.891039 9.28554 0.771759 9.44876 0.771759 9.70615V10.02C0.771759 10.2712 0.891039 10.4469 1.19238 10.4469H1.95828C2.16545 12.2487 3.70354 13.6549 5.57435 13.6549ZM5.57435 12.5375C4.18694 12.5375 3.06319 11.42 3.06319 10.0263C3.06319 8.63891 4.18694 7.52145 5.57435 7.52145C6.95549 7.52145 8.07924 8.63891 8.07924 10.0263C8.07924 11.42 6.96805 12.5375 5.57435 12.5375ZM14.4325 12.5375C13.0325 12.5375 11.9213 11.42 11.9213 10.0263C11.9213 8.63891 13.0325 7.52145 14.4325 7.52145C15.8136 7.52145 16.9374 8.63891 16.9374 10.0263C16.9374 11.42 15.8136 12.5375 14.4325 12.5375Z" />
  </svg>
);

export const CollectionIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.65792 15.024C6.92913 15.024 7.10491 14.8834 7.53181 14.4665L9.47042 12.548C9.49051 12.5229 9.53571 12.5229 9.5558 12.548L11.4994 14.4665C11.9263 14.8834 12.0971 15.024 12.3733 15.024C12.7751 15.024 13.0262 14.7478 13.0262 14.2958V5.52679C13.0262 4.52734 12.5039 4 11.5145 4H7.51172C6.52232 4 6 4.52734 6 5.52679V14.2958C6 14.7478 6.25112 15.024 6.65792 15.024Z" />
  </svg>
);

export const AboutIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.62663 15.6262H15.3681C16.7304 15.6262 17.4398 14.923 17.4398 13.5796V5.93937C17.4398 4.5959 16.7304 3.89278 15.3681 3.89278H4.62663C3.27061 3.89278 2.5612 4.58962 2.5612 5.93937V13.5796C2.5612 14.923 3.27061 15.6262 4.62663 15.6262ZM4.70825 14.3769C4.13068 14.3769 3.81051 14.0755 3.81051 13.4666V6.05237C3.81051 5.44342 4.13068 5.14208 4.70825 5.14208H15.2865C15.8641 5.14208 16.1842 5.44342 16.1842 6.05237V13.4666C16.1842 14.0755 15.8641 14.3769 15.2865 14.3769H14.0749C13.5224 12.9078 11.9216 11.8845 10.0005 11.8845C8.07948 11.8845 6.47234 12.9078 5.92616 14.3769H4.70825ZM10.0005 10.8801C11.1996 10.8863 12.1413 9.86933 12.1413 8.53842C12.1413 7.28912 11.1933 6.24071 10.0005 6.24071C8.80144 6.24071 7.85347 7.28912 7.85975 8.53842C7.86603 9.86933 8.79516 10.8675 10.0005 10.8801Z" />
  </svg>
);

export const MagazineIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.38748 15.3145C4.38748 15.8418 4.51304 16.162 5.00272 16.4006C6.08252 16.884 7.58921 17.1916 9.35958 17.1979C11.1802 17.1916 13.2079 16.9154 14.6205 16.2373C15.4052 15.8544 15.6124 15.5028 15.6124 14.6804V5.08152C15.6124 4.008 15.1164 3.4995 14.0868 3.4995H13.4904V3.28605C13.4904 2.63315 13.1389 2.31297 12.5488 2.31297C12.3479 2.31297 12.1093 2.35692 11.8331 2.45109C9.93715 3.06004 8.20445 3.46811 5.99462 3.46811H5.5175C4.79555 3.46811 4.38748 3.88245 4.38748 4.54163V15.3145ZM7.66455 15.9548C9.89948 15.8669 11.9084 15.2517 13.0133 14.4105C13.3586 14.1468 13.4904 13.8831 13.4904 13.2993V4.67974H14.0555C14.3128 4.67974 14.4321 4.81157 14.4321 5.10036V14.5549C14.4321 14.9253 14.3693 15.0822 14.0115 15.2329C12.8689 15.7351 11.2995 16.049 9.81159 16.0678C9.09591 16.0741 8.40534 16.0427 7.66455 15.9548ZM6.69775 8.37742V6.2241C6.69775 6.13621 6.76681 6.06088 6.8547 6.0546C8.30489 5.9981 9.6107 5.75954 10.9542 5.25731C11.0358 5.23219 11.1613 5.26358 11.1613 5.41425V7.64918C11.1613 7.70568 11.1299 7.76219 11.0734 7.7873C9.89948 8.26442 8.35512 8.52809 6.8547 8.52809C6.77308 8.52809 6.69775 8.47787 6.69775 8.37742Z" />
  </svg>
);

export const WaveIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8.37429 14.4551C10.3644 16.4452 12.8944 16.2945 14.7024 14.4927C16.0584 13.1367 16.3849 11.7053 15.8827 9.99775C15.619 8.88029 14.9786 7.63099 14.4136 6.56375C14.1248 6.01129 13.7733 5.30189 13.5536 5.05077C13.3024 4.76199 12.9383 4.74944 12.6558 4.99427C12.3294 5.27678 12.3168 5.64717 12.5177 6.2373L13.2334 8.196C13.3087 8.38434 13.2962 8.49734 13.2271 8.56639C13.1455 8.64801 13.0388 8.65428 12.8944 8.50989L8.20478 3.82031C7.916 3.53152 7.46399 3.53152 7.17521 3.81403C6.8927 4.10281 6.8927 4.55482 7.17521 4.8436L10.5904 8.25878C10.4397 8.33411 10.2765 8.422 10.1195 8.52873L6.17702 4.57993C5.88824 4.29743 5.43623 4.29743 5.14745 4.57993C4.86494 4.86872 4.86494 5.32072 5.14745 5.60323L9.04602 9.5018C8.92674 9.64619 8.81374 9.79058 8.70702 9.94125L5.13489 6.36913C4.84611 6.08035 4.3941 6.08035 4.10531 6.36913C3.82281 6.65164 3.82281 7.10992 4.10531 7.39243L7.98506 11.2722C7.916 11.4668 7.8595 11.6614 7.82183 11.8497L5.12233 9.15024C4.83355 8.86773 4.38154 8.86146 4.09276 9.15024C3.81025 9.43274 3.81025 9.89103 4.09276 10.1735L8.37429 14.4551Z" />
  </svg>
);

export const PersonalCardIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.62022 15.6161H15.3743C16.7303 15.6161 17.4334 14.9193 17.4334 13.5821V5.9356C17.4334 4.5984 16.7303 3.90156 15.3743 3.90156H4.62022C3.26419 3.90156 2.56107 4.59213 2.56107 5.9356V13.5821C2.56107 14.9193 3.26419 15.6161 4.62022 15.6161ZM7.42017 9.75883C6.66682 9.75883 6.05158 9.11849 6.05158 8.26469C6.05158 7.45485 6.66682 6.78939 7.42017 6.78939C8.18607 6.78939 8.79503 7.45485 8.79503 8.26469C8.79503 9.11849 8.18607 9.76511 7.42017 9.75883ZM11.5385 7.71224C11.2999 7.71224 11.1241 7.53018 11.1241 7.2979C11.1241 7.07817 11.2999 6.90239 11.5385 6.90239H14.8344C15.0666 6.90239 15.2424 7.07817 15.2424 7.2979C15.2424 7.53018 15.0666 7.71224 14.8344 7.71224H11.5385ZM11.5385 10.1669C11.2999 10.1669 11.1241 9.98484 11.1241 9.75883C11.1241 9.53283 11.2999 9.35705 11.5385 9.35705H14.8344C15.0666 9.35705 15.2424 9.53283 15.2424 9.75883C15.2424 9.98484 15.0666 10.1669 14.8344 10.1669H11.5385ZM5.02828 12.6592C4.796 12.6592 4.67672 12.496 4.67672 12.2888C4.67672 11.6987 5.54307 10.1857 7.42017 10.1857C9.30354 10.1857 10.1762 11.6987 10.1762 12.2888C10.1762 12.496 10.0569 12.6592 9.8246 12.6592H5.02828ZM11.5385 12.6216C11.2999 12.6216 11.1241 12.4458 11.1241 12.226C11.1241 11.9938 11.2999 11.8117 11.5385 11.8117H14.8344C15.0666 11.8117 15.2424 11.9938 15.2424 12.226C15.2424 12.4458 15.0666 12.6216 14.8344 12.6216H11.5385Z" />
  </svg>
);

export const ClearIcon = (props: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.6268 15.7021C15.9828 15.7021 16.686 15.0464 16.686 13.684V5.88521C16.686 4.52282 15.9828 3.81615 14.6268 3.81615H9.19643C8.35519 3.81615 7.73996 4.02624 7.17495 4.65014L3.62166 8.4763C3.16337 8.97924 2.98759 9.34849 2.98759 9.74957C2.98759 10.1506 3.16337 10.5263 3.62166 11.0228L7.18123 14.8299C7.74624 15.4538 8.36147 15.6957 9.19643 15.6957L14.6268 15.7021ZM8.85115 12.538C8.5247 12.538 8.26102 12.2643 8.26102 11.9269C8.26102 11.7741 8.3238 11.6213 8.43681 11.513L10.1632 9.7623L8.43681 8.01793C8.3238 7.90333 8.26102 7.75691 8.26102 7.59775C8.26102 7.26034 8.5247 7.00568 8.85115 7.00568C9.02693 7.00568 9.15876 7.05661 9.27177 7.17757L10.9982 8.92195L12.7372 7.17121C12.8564 7.05025 12.9883 6.99295 13.1515 6.99295C13.478 6.99295 13.7416 7.25397 13.7416 7.58502C13.7416 7.75054 13.6851 7.8906 13.5659 8.01156L11.8394 9.7623L13.5596 11.5067C13.6726 11.6213 13.7354 11.7677 13.7354 11.9269C13.7354 12.2643 13.478 12.538 13.1452 12.538C12.9757 12.538 12.8313 12.468 12.7121 12.3598L10.9982 10.6154L9.28432 12.3598C9.17132 12.4744 9.02693 12.538 8.85115 12.538Z" />
  </svg>
);

export const ExternalLinkIcon = (props: IconProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 2H14V6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2L7.33337 8.66667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6667 12.0001V12.6668C12.6667 13.4034 12.07 14.0001 11.3333 14.0001H3.33333C2.59667 14.0001 2 13.4034 2 12.6668V4.66677C2 3.9301 2.59667 3.33344 3.33333 3.33344H4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BurgerIcon = (props: IconProps) => (
  <svg
    fill="currentColor"
    height="20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 329.988 329.988"
    {...props}
  >
    <path d="M329.988,174.915c0-19.47-12.441-36.085-29.79-42.331c-0.773-27.953-15.317-53.871-41.16-73.203  c-25.264-18.899-58.62-29.307-93.923-29.307c-35.306,0-68.664,10.408-93.929,29.307c-25.819,19.313-40.361,45.201-41.161,73.123  C12.554,138.684,0,155.357,0,174.915c0,19.565,12.539,36.247,29.994,42.441v17.557c0,35.841,29.159,65,65,65h140  c35.841,0,65-29.159,65-65v-17.557C317.449,211.162,329.988,194.48,329.988,174.915z M285.228,189.925  c-0.079-0.001-0.155-0.012-0.234-0.012h-240c-0.079,0-0.156,0.011-0.235,0.012C36.601,189.802,30,183.121,30,174.915  c0-8.259,6.723-14.979,14.987-14.979H285c8.265,0,14.988,6.719,14.988,14.979C299.988,183.121,293.387,189.801,285.228,189.925z   M89.156,83.404c20.112-15.045,47.088-23.33,75.959-23.33c28.868,0,55.842,8.285,75.952,23.329  c17.167,12.842,27.294,29.206,28.932,46.533H60.223C61.861,112.61,71.989,96.246,89.156,83.404z M234.994,269.913h-140  c-19.299,0-35-15.701-35-35v-14.977h210v14.977C269.994,254.212,254.293,269.913,234.994,269.913z" />
  </svg>
);
