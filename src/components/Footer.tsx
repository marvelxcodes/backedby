import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="about">
        <svg
          width="220"
          height="70"
          viewBox="0 0 220 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M112.458 41.6959C112.864 41.4383 113.335 41.3015 113.816 41.3015V41.2818C114.253 41.2848 114.683 41.4009 115.062 41.6188C115.442 41.8366 115.758 42.1489 115.981 42.5252C116.205 42.9015 116.327 43.3291 116.336 43.7665C116.345 44.204 116.241 44.6363 116.034 45.0217L108.918 58.2576C104.249 66.9511 102.28 69.4654 94.9622 69.4654H94.8001C94.3237 69.4434 93.8741 69.2387 93.5447 68.8937C93.2154 68.5488 93.0316 68.0902 93.0316 67.6133C93.0316 67.1363 93.2154 66.6778 93.5447 66.3328C93.8741 65.9879 94.3237 65.7831 94.8001 65.7611H95.1441C98.117 65.7611 99.6746 64.5711 100.774 62.464L101.276 61.5033L92.4716 45.0177C92.2656 44.6306 92.1633 44.1967 92.1746 43.7584C92.1859 43.32 92.3104 42.892 92.536 42.5159C92.7616 42.1399 93.0807 41.8286 93.4622 41.6124C93.8437 41.3961 94.2746 41.2822 94.7132 41.2818C95.1863 41.2823 95.6499 41.4152 96.0516 41.6653C96.4533 41.9153 96.777 42.2727 96.9863 42.6971L101.62 52.1259L104.32 57.5697L107.087 52.1259L111.523 42.7564C111.728 42.3213 112.052 41.9535 112.458 41.6959Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M81.074 40.6176C76.8637 40.6176 73.5626 42.2622 71.4198 45.3617V34.8338C71.4335 34.4829 71.3762 34.1328 71.2513 33.8046C71.1265 33.4763 70.9366 33.1766 70.6931 32.9235C70.4497 32.6704 70.1577 32.469 69.8345 32.3315C69.5114 32.1939 69.1638 32.123 68.8126 32.123C68.4614 32.123 68.1138 32.1939 67.7906 32.3315C67.4675 32.469 67.1755 32.6704 66.932 32.9235C66.6886 33.1766 66.4987 33.4763 66.3738 33.8046C66.249 34.1328 66.1917 34.4829 66.2053 34.8338V60.9064C66.2084 61.333 66.3637 61.7444 66.6432 62.0667C66.9227 62.389 67.3081 62.601 67.73 62.6644C68.1519 62.7278 68.5825 62.6385 68.9444 62.4126C69.3063 62.1867 69.5757 61.839 69.7041 61.4322L70.7319 58.0718C71.9693 61.1831 76.2667 63.061 80.6589 63.061C87.2017 63.061 92.0525 57.9216 92.0525 52.1733V51.4855C92.0479 50.0503 91.7599 48.6301 91.2052 47.3064C90.6505 45.9827 89.8399 44.7816 88.8199 43.7719C87.7999 42.7622 86.5906 41.9638 85.2614 41.4226C83.9322 40.8813 82.5092 40.6077 81.074 40.6176ZM79.2871 59.3725C83.7267 59.3725 86.6522 56.8107 86.6522 52.1931V51.4855C86.6522 46.9114 83.7267 44.3022 79.2871 44.3022C74.9423 44.3022 71.6491 47.3225 71.6491 51.8966V52.375C71.6491 56.949 75.6737 59.3725 79.2871 59.3725Z"
            fill="white"
          />
          <path
            d="M159.351 18.129L165.127 12.784C165.531 12.4055 165.768 11.8819 165.786 11.3284C165.805 10.775 165.602 10.237 165.224 9.83279C164.845 9.42859 164.322 9.19131 163.768 9.17315C163.215 9.15498 162.677 9.35742 162.272 9.73593L150.61 20.8252V2.71077C150.624 2.35984 150.566 2.00976 150.441 1.68152C150.317 1.35327 150.127 1.0536 149.883 0.800483C149.64 0.547363 149.348 0.345996 149.025 0.208447C148.702 0.0708986 148.354 0 148.003 0C147.652 0 147.304 0.0708986 146.981 0.208447C146.658 0.345996 146.366 0.547363 146.122 0.800483C145.879 1.0536 145.689 1.35327 145.564 1.68152C145.439 2.00976 145.382 2.35984 145.395 2.71077V27.965C145.422 28.6389 145.708 29.2765 146.194 29.744C146.68 30.2115 147.328 30.4727 148.003 30.4727C148.677 30.4727 149.325 30.2115 149.812 29.744C150.298 29.2765 150.584 28.6389 150.61 27.965V25.9487L156.101 20.8726L163.257 29.744C163.442 29.9696 163.67 30.1565 163.927 30.2941C164.184 30.4316 164.466 30.5172 164.757 30.5458C165.047 30.5744 165.34 30.5456 165.619 30.4609C165.899 30.3763 166.158 30.2374 166.384 30.0523C166.61 29.8673 166.796 29.6396 166.934 29.3822C167.072 29.1249 167.157 28.843 167.186 28.5526C167.214 28.2623 167.186 27.9691 167.101 27.6899C167.016 27.4106 166.877 27.1508 166.692 26.9252L159.351 18.129ZM142.308 25.3755L142.146 25.2411C141.829 24.983 141.436 24.8349 141.028 24.8192C140.619 24.8035 140.216 24.9211 139.881 25.1541C137.983 26.4311 136.03 27.0043 133.286 27.0043C128.851 27.0043 125.008 24.2567 125.008 19.9119V19.5166C125.008 15.4446 128.665 12.4242 133.286 12.4242C135.595 12.3782 137.858 13.0708 139.746 14.4009C140.099 14.6379 140.518 14.7588 140.943 14.7468C141.368 14.7348 141.779 14.5903 142.118 14.3337C142.39 14.1326 142.609 13.8686 142.756 13.5645C142.904 13.2604 142.976 12.925 142.966 12.5871C142.956 12.2492 142.864 11.9188 142.698 11.624C142.533 11.3292 142.299 11.0788 142.015 10.8943C139.758 9.41571 136.746 8.49457 133.057 8.49457C125.969 8.49457 119.576 13.1872 119.576 19.7301V20.0938C119.576 26.6366 125.478 30.9379 132.938 30.9379C136.599 30.9379 139.556 30.1472 142.162 28.3524C142.4 28.1895 142.597 27.9736 142.738 27.7217C142.879 27.4698 142.96 27.1886 142.974 26.9003C142.988 26.6119 142.936 26.3242 142.82 26.0597C142.704 25.7951 142.529 25.561 142.308 25.3755ZM81.074 8.49457C76.8637 8.49457 73.5626 10.1392 71.4199 13.2386V2.71077C71.4335 2.35984 71.3762 2.00976 71.2513 1.68152C71.1265 1.35327 70.9366 1.0536 70.6932 0.800483C70.4497 0.547363 70.1577 0.345996 69.8345 0.208447C69.5114 0.0708986 69.1638 0 68.8126 0C68.4614 0 68.1138 0.0708986 67.7907 0.208447C67.4675 0.345996 67.1755 0.547363 66.932 0.800483C66.6886 1.0536 66.4987 1.35327 66.3739 1.68152C66.249 2.00976 66.1917 2.35984 66.2053 2.71077V28.7833C66.2084 29.2099 66.3637 29.6214 66.6432 29.9437C66.9228 30.266 67.3082 30.4779 67.73 30.5413C68.1519 30.6047 68.5826 30.5154 68.9445 30.2895C69.3064 30.0636 69.5757 29.716 69.7041 29.3091L70.7359 25.9487C71.9694 29.0601 76.2707 30.9379 80.6629 30.9379C87.2057 30.9379 92.0525 25.7985 92.0525 20.0503V19.3624C92.0484 17.9271 91.7608 16.5067 91.2063 15.1827C90.6517 13.8588 89.8411 12.6575 88.8211 11.6477C87.801 10.6379 86.5915 9.83955 85.262 9.29844C83.9326 8.75734 82.5093 8.48415 81.074 8.49457ZM86.6562 20.0503C86.6562 24.6678 83.7267 27.2296 79.291 27.2296C75.6737 27.2296 71.6491 24.8062 71.6491 20.2322V19.7736C71.6491 15.2153 74.9423 12.1791 79.291 12.1791C83.7267 12.1791 86.6562 14.7883 86.6562 19.3624V20.0503ZM118.335 27.2415C117.105 27.0675 116.753 26.5694 116.753 25.4032V18.5401C116.769 12.3175 113.476 8.49457 105.379 8.49457C102.361 8.44961 99.3884 9.24192 96.7926 10.7836C96.5702 10.9103 96.3748 11.0795 96.2178 11.2817C96.0607 11.4838 95.9451 11.715 95.8773 11.9618C95.8096 12.2087 95.7911 12.4665 95.823 12.7205C95.8549 12.9745 95.9366 13.2198 96.0632 13.4422C96.3191 13.8915 96.7429 14.2208 97.2415 14.3575C97.4884 14.4253 97.7462 14.4437 98.0002 14.4118C98.2542 14.3799 98.4994 14.2983 98.7219 14.1716C100.683 13.0535 102.893 12.4471 105.15 12.4084C109.451 12.4084 111.555 14.2388 111.555 17.3501V18.7734C101.39 16.0692 93.2069 18.8603 93.2069 24.3081V24.4899C93.2069 28.6529 97.0061 30.9419 102.45 30.9419C106.613 30.9419 110.412 29.4317 112.883 26.5931C112.697 30.0721 115.124 30.9419 117.868 30.9419H118.133C118.596 30.9419 119.041 30.7578 119.369 30.4301C119.696 30.1024 119.88 29.6579 119.88 29.1945V28.981C119.876 28.5533 119.717 28.1415 119.433 27.8217C119.149 27.502 118.759 27.2959 118.335 27.2415ZM111.555 22.2009C111.555 25.1264 106.98 27.1387 103.502 27.1387C100.62 27.1387 98.6231 25.8894 98.6231 24.3951V24.2132C98.6231 21.1928 103.335 19.5917 111.57 21.8768L111.555 22.2009ZM217.371 0.101545C217.028 0.101024 216.688 0.168158 216.372 0.2991C216.055 0.430042 215.767 0.622215 215.525 0.864608C215.282 1.107 215.09 1.39485 214.959 1.71165C214.828 2.02845 214.761 2.36798 214.761 2.71077V12.361C212.749 9.89011 210.017 8.4748 205.843 8.4748C199.62 8.4748 194.081 13.6893 194.081 19.5008V20.1847C194.081 25.9962 198.889 30.9379 205.748 30.9379C210.187 30.9379 213.983 28.8782 215.449 25.7985L216.038 28.9335C216.062 29.1931 216.137 29.4455 216.258 29.6763C216.379 29.9071 216.544 30.1117 216.745 30.2786C216.945 30.4454 217.176 30.5712 217.425 30.6487C217.674 30.7262 217.935 30.754 218.195 30.7304C218.455 30.7067 218.707 30.6322 218.938 30.5111C219.169 30.3899 219.373 30.2245 219.54 30.0242C219.707 29.8239 219.833 29.5928 219.91 29.3439C219.988 29.0951 220.015 28.8334 219.992 28.5738V2.71077C219.992 2.36698 219.925 2.02648 219.793 1.7089C219.661 1.39132 219.468 1.10294 219.225 0.860392C218.981 0.617842 218.692 0.425915 218.374 0.295675C218.055 0.165435 217.715 0.0994573 217.371 0.101545ZM214.489 20.1847C214.489 24.3951 211.101 27.2296 206.938 27.2296C202.684 27.2296 199.529 24.3951 199.529 19.9554V19.4533C199.529 15.0176 202.502 12.1791 206.938 12.1791C211.65 12.1791 214.489 15.7016 214.489 19.7301V20.1847ZM179.735 8.49457C171.915 8.49457 166.973 13.7565 166.973 19.7933V20.1887C166.973 26.5497 172.781 30.9419 180.102 30.9419C184.451 30.9419 187.594 29.997 190.235 28.0796C190.482 27.8936 190.68 27.6498 190.812 27.3697C190.943 27.0895 191.004 26.7815 190.989 26.4723C190.975 26.1632 190.884 25.8624 190.727 25.5961C190.569 25.3298 190.348 25.1061 190.085 24.9446C189.757 24.7505 189.38 24.6565 189 24.674C188.62 24.6916 188.254 24.82 187.946 25.0434C185.866 26.5062 183.799 27.2336 180.561 27.2336C175.757 27.2336 172.278 24.399 172.278 20.7382V20.6038H190.405C190.706 20.6029 191.003 20.536 191.275 20.4078C191.547 20.2795 191.788 20.0931 191.98 19.8615C192.173 19.63 192.312 19.3591 192.388 19.0679C192.464 18.7767 192.475 18.4724 192.421 18.1764C191.389 12.5903 186.76 8.49457 179.735 8.49457ZM187.376 17.7139H172.417V17.6704C172.417 14.7883 175.39 12.1791 179.829 12.1791C184.178 12.1791 187.376 15.1995 187.376 17.6704V17.7139Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53.9737 27.3653C53.9717 22.2148 52.5027 17.1719 49.7393 12.8294C46.976 8.48705 43.0331 5.02569 38.3744 2.85232C33.7157 0.678957 28.5348 -0.116063 23.4407 0.560732C18.3467 1.23753 13.5513 3.358 9.61835 6.67285C5.68542 9.9877 2.77843 14.3591 1.23918 19.2732C-0.300068 24.1872 -0.40759 29.4396 0.929234 34.4128C2.26606 39.386 4.99166 43.8733 8.7856 47.3471C12.5795 50.8209 17.2841 53.1367 22.3462 54.0224V57.6343C22.3462 57.6343 6.78377 58.8648 7.42933 62.7632H25.8439V54.4149H26.9815H28.1245V62.7791H46.5232C47.1741 58.8808 31.6064 57.6503 31.6064 57.6503V54.0383C37.8681 52.9373 43.5425 49.6599 47.6331 44.782C51.7236 39.9041 53.9685 33.7375 53.9737 27.3653ZM21.3514 25.09H31.5058C31.9506 25.1417 32.4014 25.0986 32.8284 24.9633C33.2554 24.8281 33.6491 24.6038 33.9835 24.3053C34.3179 24.0067 34.5855 23.6407 34.7688 23.2311C34.952 22.8215 35.0467 22.3778 35.0467 21.9289C35.0467 21.48 34.952 21.0362 34.7688 20.6267C34.5855 20.2171 34.3179 19.851 33.9835 19.5525C33.6491 19.254 33.2554 19.0297 32.8284 18.8945C32.4014 18.7592 31.9506 18.7161 31.5058 18.7678H21.3514V25.09ZM31.5058 35.9894H21.3514V29.6672H31.5058C32.3479 29.6672 33.1554 30.0025 33.7508 30.5993C34.3462 31.1961 34.6807 32.0055 34.6807 32.8495C34.6589 33.6827 34.3161 34.475 33.7242 35.0604C33.1323 35.6458 32.3373 35.9787 31.5058 35.9894ZM14.0516 46.7693C17.8805 49.3335 22.3819 50.7022 26.9868 50.7022L26.971 50.7287C33.1503 50.7231 39.0747 48.2595 43.4431 43.8789C47.8116 39.4983 50.2668 33.559 50.2696 27.3653C50.2696 22.7497 48.9041 18.2378 46.3458 14.4C43.7874 10.5623 40.1512 7.57116 35.8968 5.80484C31.6424 4.03853 26.961 3.57638 22.4446 4.47684C17.9282 5.3773 13.7796 7.59992 10.5234 10.8636C7.2673 14.1274 5.04983 18.2856 4.15146 22.8125C3.25309 27.3394 3.71416 32.0317 5.47637 36.296C7.23859 40.5602 10.2228 44.205 14.0516 46.7693ZM26.971 7.12587C22.9734 7.12587 19.0658 8.31423 15.7422 10.5406C12.4186 12.767 9.82841 15.9314 8.29935 19.6335C6.77029 23.3356 6.37103 27.4091 7.15206 31.3387C7.9331 35.2683 9.85932 38.8774 12.6871 41.7096C15.5149 44.5417 19.1172 46.4696 23.0382 47.2493C26.9593 48.0291 31.023 47.6257 34.7154 46.0902C38.4077 44.5547 41.5627 41.956 43.7813 38.6229C45.9999 35.2899 47.1825 31.3721 47.1794 27.3653C47.1765 21.9956 45.0461 16.8468 41.2564 13.0513C37.4667 9.25587 32.3282 7.12446 26.971 7.12587Z"
            fill="white"
          />
        </svg>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          aliquid, accusantium aperiam ipsum maxime quas mollitia
        </p>
      </div>
      <div className="others">
        <div className="mainmenu">
          <p>Main Menu</p>
          <ul>
            <li>Get Test Tokens</li>
            <li>Buy Tokens</li>
            <li>Upload Art</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className="resources">
          <p>Resources</p>
          <ul>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Tutorials</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
