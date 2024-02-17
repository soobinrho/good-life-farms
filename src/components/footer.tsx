'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className='absolute bottom-0 mx-3 my-4 font-extralight'>
        Made with ❤ by{' '}
        <a
          className='font-light hover:text-gray-100 active:text-gray-400'
          target='_blank'
          href='https://www.linkedin.com/in/kathy-do-1b035a242/'
          rel='noopener noreferrer'
        >
          Kathy
        </a>
        ,{' '}
        <a
          className='font-light hover:text-gray-100 active:text-gray-400'
          target='_blank'
          href='https://www.linkedin.com/in/oluwatobiloba-o-992772241/'
          rel='noopener noreferrer'
        >
          Tobi
        </a>
        , and{' '}
        <a
          className='font-light hover:text-gray-100 active:text-gray-400'
          target='_blank'
          href='https://www.linkedin.com/in/soobinrho/'
          rel='noopener noreferrer'
        >
          Soobin
        </a>
        .
      </div>

      <div className='absolute bottom-0 right-0 my-4 mr-4 hidden font-extralight sm:visible'>
        <a
          className='font-light hover:text-gray-100 active:text-gray-400'
          target='_blank'
          href='https://devpost.com/software/good-life-farms'
          rel='noopener noreferrer'
        >
          <svg
            className='hover:text-white active:text-gray-300'
            width='32'
            height='36'
            viewBox='0 0 3189 3410'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1401.11 93.7238C1492.25 43.7875 1537.82 18.8194 1587.41 18.0736C1589.42 18.0435 1591.42 18.0435 1593.43 18.0736C1643.02 18.8194 1688.59 43.7875 1779.74 93.7238L2123.16 281.88C2221.37 335.692 2270.48 362.598 2298.26 407.818C2299.38 409.641 2300.47 411.482 2301.53 413.34C2327.84 459.428 2327.84 515.424 2327.84 627.417V968.68C2327.84 1080.67 2327.84 1136.67 2301.53 1182.76C2300.47 1184.62 2299.38 1186.46 2298.26 1188.28C2270.48 1233.5 2221.37 1260.41 2123.16 1314.22L1779.74 1502.37C1688.59 1552.31 1643.02 1577.28 1593.43 1578.02C1591.42 1578.05 1589.42 1578.05 1587.41 1578.02C1537.82 1577.28 1492.25 1552.31 1401.11 1502.37L1057.68 1314.22C959.467 1260.41 910.359 1233.5 882.582 1188.28C881.462 1186.46 880.372 1184.62 879.312 1182.76C853 1136.67 853 1080.67 853 968.68V627.417C853 515.424 853 459.428 879.312 413.34C880.372 411.482 881.462 409.641 882.582 407.818C910.359 362.598 959.467 335.692 1057.68 281.88L1401.11 93.7238Z'
              fill='#7CFFB8'
            ></path>
            <path
              d='M2238.52 596.809C2332.5 543.075 2379.49 516.207 2430.96 515.405C2433.04 515.373 2435.11 515.373 2437.19 515.405C2488.66 516.207 2535.65 543.075 2629.63 596.809L2855.71 726.065C2951.02 780.557 2998.67 807.803 3025.54 852.474C3026.62 854.276 3027.68 856.095 3028.7 857.93C3054.15 903.426 3054.15 958.32 3054.15 1068.11V1319.98C3054.15 1429.77 3054.15 1484.66 3028.7 1530.16C3027.68 1531.99 3026.62 1533.81 3025.54 1535.61C2998.67 1580.28 2951.02 1607.53 2855.71 1662.02L2629.63 1791.28C2535.65 1845.01 2488.66 1871.88 2437.19 1872.68C2435.11 1872.71 2433.04 1872.71 2430.96 1872.68C2379.49 1871.88 2332.5 1845.01 2238.52 1791.28L2012.44 1662.02C1917.13 1607.53 1869.48 1580.28 1842.61 1535.61C1841.53 1533.81 1840.47 1531.99 1839.44 1530.16C1814 1484.66 1814 1429.77 1814 1319.98V1068.11C1814 958.32 1814 903.426 1839.44 857.93C1840.47 856.095 1841.53 854.276 1842.61 852.474C1869.48 807.803 1917.13 780.557 2012.44 726.065L2238.52 596.809Z'
              fill='#21DE9D'
            ></path>
            <path
              d='M2238.52 596.809C2332.5 543.075 2379.49 516.207 2430.96 515.405C2433.04 515.373 2435.11 515.373 2437.19 515.405C2488.66 516.207 2535.65 543.075 2629.63 596.809L2855.71 726.065C2951.02 780.557 2998.67 807.803 3025.54 852.474C3026.62 854.276 3027.68 856.095 3028.7 857.93C3054.15 903.426 3054.15 958.32 3054.15 1068.11V1319.98C3054.15 1429.77 3054.15 1484.66 3028.7 1530.16C3027.68 1531.99 3026.62 1533.81 3025.54 1535.61C2998.67 1580.28 2951.02 1607.53 2855.71 1662.02L2629.63 1791.28C2535.65 1845.01 2488.66 1871.88 2437.19 1872.68C2435.11 1872.71 2433.04 1872.71 2430.96 1872.68C2379.49 1871.88 2332.5 1845.01 2238.52 1791.28L2012.44 1662.02C1917.13 1607.53 1869.48 1580.28 1842.61 1535.61C1841.53 1533.81 1840.47 1531.99 1839.44 1530.16C1814 1484.66 1814 1429.77 1814 1319.98V1068.11C1814 958.32 1814 903.426 1839.44 857.93C1840.47 856.095 1841.53 854.276 1842.61 852.474C1869.48 807.803 1917.13 780.557 2012.44 726.065L2238.52 596.809Z'
              stroke='black'
            ></path>
            <path
              d='M475.515 596.809C569.499 543.075 616.491 516.207 667.958 515.405C670.035 515.373 672.113 515.373 674.19 515.405C725.657 516.207 772.649 543.075 866.633 596.809L1092.71 726.065C1188.02 780.557 1235.67 807.803 1262.54 852.474C1263.62 854.276 1264.68 856.095 1265.7 857.93C1291.15 903.426 1291.15 958.32 1291.15 1068.11V1319.98C1291.15 1429.77 1291.15 1484.66 1265.7 1530.16C1264.68 1531.99 1263.62 1533.81 1262.54 1535.61C1235.67 1580.28 1188.02 1607.53 1092.71 1662.02L866.633 1791.28C772.649 1845.01 725.657 1871.88 674.19 1872.68C672.113 1872.71 670.035 1872.71 667.958 1872.68C616.491 1871.88 569.499 1845.01 475.515 1791.28L249.441 1662.02C154.132 1607.53 106.478 1580.28 79.6105 1535.61C78.5267 1533.81 77.4714 1531.99 76.4449 1530.16C51 1484.66 51 1429.77 51 1319.98V1068.11C51 958.32 51 903.426 76.4449 857.93C77.4714 856.095 78.5267 854.276 79.6105 852.474C106.478 807.803 154.132 780.557 249.441 726.065L475.515 596.809Z'
              fill='#0FB47B'
            ></path>
            <path
              d='M475.515 596.809C569.499 543.075 616.491 516.207 667.958 515.405C670.035 515.373 672.113 515.373 674.19 515.405C725.657 516.207 772.649 543.075 866.633 596.809L1092.71 726.065C1188.02 780.557 1235.67 807.803 1262.54 852.474C1263.62 854.276 1264.68 856.095 1265.7 857.93C1291.15 903.426 1291.15 958.32 1291.15 1068.11V1319.98C1291.15 1429.77 1291.15 1484.66 1265.7 1530.16C1264.68 1531.99 1263.62 1533.81 1262.54 1535.61C1235.67 1580.28 1188.02 1607.53 1092.71 1662.02L866.633 1791.28C772.649 1845.01 725.657 1871.88 674.19 1872.68C672.113 1872.71 670.035 1872.71 667.958 1872.68C616.491 1871.88 569.499 1845.01 475.515 1791.28L249.441 1662.02C154.132 1607.53 106.478 1580.28 79.6105 1535.61C78.5267 1533.81 77.4714 1531.99 76.4449 1530.16C51 1484.66 51 1429.77 51 1319.98V1068.11C51 958.32 51 903.426 76.4449 857.93C77.4714 856.095 78.5267 854.276 79.6105 852.474C106.478 807.803 154.132 780.557 249.441 726.065L475.515 596.809Z'
              stroke='black'
            ></path>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M2308.06 2260.36C2390.36 2272.49 2445.78 2340.44 2431.85 2412.12L2282.84 2390.16C2431.85 2412.12 2431.85 2412.15 2431.84 2412.18L2431.8 2412.39L2431.74 2412.71L2431.58 2413.5C2431.46 2414.1 2431.31 2414.83 2431.12 2415.69C2430.76 2417.41 2430.27 2419.64 2429.64 2422.34C2428.38 2427.74 2426.56 2435.04 2424.09 2443.83C2419.2 2461.28 2411.55 2485.29 2400.29 2512.27C2379.13 2563.02 2339.45 2638.59 2267.52 2695.96C2186.61 2760.48 2146.93 2787.83 2100.81 2814.13C2089.1 2820.81 2078.18 2826.78 2066.63 2833.11C2036.44 2849.64 2001.89 2868.55 1937.39 2908.62C1886.62 2940.16 1841.3 2990.66 1806.58 3040.01C1789.96 3063.65 1777.26 3084.87 1768.85 3099.94C1764.67 3107.43 1761.61 3113.27 1759.73 3116.99C1758.78 3118.85 1758.14 3120.16 1757.79 3120.87L1757.53 3121.42L1757.58 3121.3L1757.62 3121.22M1757.64 3121.17C1757.6 3121.27 1757.55 3121.36 1757.51 3121.46C1725.94 3188.58 1637.94 3220.83 1560.75 3193.5C1483.43 3166.12 1446.23 3089.33 1477.66 3021.98L1610.65 3069.07C1477.66 3021.97 1477.67 3021.95 1477.68 3021.92L1477.77 3021.73L1477.92 3021.42L1478.31 3020.6C1478.61 3019.96 1479 3019.16 1479.47 3018.19C1480.41 3016.26 1481.68 3013.67 1483.3 3010.49C1486.52 3004.15 1491.1 2995.41 1497.02 2984.81C1508.79 2963.72 1526.12 2934.78 1548.85 2902.48C1592.83 2839.95 1663.49 2755.4 1761.88 2694.27C1834.4 2649.22 1879.37 2624.61 1910.1 2607.79C1919.75 2602.51 1928 2598 1935.25 2593.86C1961.79 2578.72 1987.79 2562.08 2063.4 2501.78C2082.38 2486.64 2101.4 2457.86 2116.2 2422.38C2122.93 2406.24 2127.57 2391.66 2130.48 2381.31C2131.91 2376.2 2132.87 2372.3 2133.42 2369.96C2133.69 2368.79 2133.86 2368.03 2133.92 2367.72C2133.93 2367.68 2133.94 2367.65 2133.94 2367.63C2148.16 2296.26 2225.98 2248.26 2308.06 2260.36'
              fill='#24504B'
            ></path>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M963.086 2322.83C884.505 2333.41 832.213 2389.86 846.289 2448.92L988.572 2429.76C846.289 2448.92 846.296 2448.94 846.302 2448.97L846.344 2449.15L846.409 2449.41L846.57 2450.07C846.691 2450.55 846.84 2451.14 847.018 2451.82C847.374 2453.18 847.847 2454.93 848.447 2457.03C849.645 2461.22 851.363 2466.84 853.685 2473.59C858.292 2486.97 865.469 2505.33 876.02 2525.95C895.883 2564.77 933.222 2622.73 1000.74 2666.63C1074.52 2714.6 1110.96 2735.09 1153.33 2754.78C1164.08 2759.78 1174.05 2764.23 1184.58 2768.93C1212.01 2781.17 1243.23 2795.11 1301.71 2824.72C1346.54 2847.42 1386.66 2883.82 1417.53 2919.6C1432.3 2936.72 1443.57 2952.07 1451.01 2962.93C1454.7 2968.32 1457.38 2972.5 1459 2975.12C1459.82 2976.42 1460.36 2977.33 1460.64 2977.79L1460.79 2978.05L1460.73 2977.94L1460.69 2977.86M1460.66 2977.82C1460.72 2977.92 1460.77 2978.01 1460.83 2978.11C1492.53 3032.99 1577.36 3058.3 1650.55 3034.63C1723.88 3010.92 1757.75 2947.02 1726.19 2891.9L1593.42 2934.84C1726.19 2891.9 1726.18 2891.88 1726.17 2891.86L1726.08 2891.7L1725.93 2891.44L1725.55 2890.79C1725.25 2890.29 1724.88 2889.66 1724.44 2888.91C1723.54 2887.41 1722.34 2885.42 1720.83 2882.99C1717.81 2878.15 1713.54 2871.52 1708.06 2863.51C1697.13 2847.55 1681.1 2825.73 1660.09 2801.39C1619.4 2754.23 1554.06 2690.52 1463.25 2644.54C1397.13 2611.05 1356.01 2592.71 1328.08 2580.24C1319.35 2576.35 1311.91 2573.03 1305.4 2570C1281.7 2558.98 1258.41 2546.87 1189.88 2502.31C1174.72 2492.46 1158.69 2473.06 1145.86 2447.97C1140.06 2436.64 1136.05 2426.39 1133.56 2419.16C1132.34 2415.6 1131.53 2412.92 1131.09 2411.38C1130.88 2410.66 1130.76 2410.2 1130.71 2410.03C1116.29 2351.29 1041.41 2312.28 963.086 2322.83'
              fill='#24504B'
            ></path>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M1603 1386.08C1685.84 1386.08 1753 1437.56 1753 1501.05V3294.24C1753 3357.73 1685.84 3409.21 1603 3409.21C1520.16 3409.21 1453 3357.73 1453 3294.24V1501.05C1453 1437.56 1520.16 1386.08 1603 1386.08Z'
              fill='#24504B'
            ></path>
            <path
              d='M2356.5 1468.85C2451.81 1413.26 2499.47 1385.47 2551.83 1384.64C2553.94 1384.6 2556.06 1384.6 2558.17 1384.64C2610.53 1385.47 2658.19 1413.26 2753.5 1468.85L2993.5 1608.83C3087.44 1663.62 3134.41 1691.01 3160.85 1735.42C3161.91 1737.21 3162.95 1739.02 3163.96 1740.84C3189 1786.06 3189 1840.43 3189 1949.17V2236.08C3189 2344.82 3189 2399.2 3163.96 2444.41C3162.95 2446.23 3161.91 2448.04 3160.85 2449.83C3134.41 2494.24 3087.44 2521.63 2993.5 2576.42L2753.5 2716.4C2658.19 2771.99 2610.53 2799.79 2558.17 2800.61C2556.06 2800.65 2553.94 2800.65 2551.83 2800.61C2499.47 2799.79 2451.81 2771.99 2356.5 2716.4L2116.5 2576.42C2022.56 2521.63 1975.59 2494.24 1949.15 2449.83C1948.09 2448.04 1947.05 2446.23 1946.04 2444.41C1921 2399.2 1921 2344.82 1921 2236.08V1949.17C1921 1840.43 1921 1786.06 1946.04 1740.84C1947.05 1739.02 1948.09 1737.21 1949.15 1735.42C1975.59 1691.01 2022.56 1663.62 2116.5 1608.83L2356.5 1468.85Z'
              fill='#089F7A'
            ></path>
            <path
              d='M435.499 1468.77C530.815 1413.18 578.473 1385.39 630.832 1384.56C632.944 1384.52 635.056 1384.52 637.168 1384.56C689.527 1385.39 737.185 1413.18 832.501 1468.77L1072.5 1608.75C1166.44 1663.54 1213.41 1690.93 1239.85 1735.34C1240.91 1737.13 1241.95 1738.94 1242.96 1740.76C1268 1785.97 1268 1840.35 1268 1949.09V2236C1268 2344.74 1268 2399.11 1242.96 2444.33C1241.95 2446.15 1240.91 2447.96 1239.85 2449.75C1213.41 2494.16 1166.44 2521.55 1072.5 2576.34L832.501 2716.32C737.185 2771.91 689.527 2799.7 637.168 2800.53C635.056 2800.57 632.944 2800.57 630.832 2800.53C578.473 2799.7 530.815 2771.91 435.499 2716.32L195.499 2576.34C101.563 2521.55 54.5946 2494.16 28.1545 2449.75C27.0875 2447.96 26.0486 2446.15 25.0382 2444.33C0 2399.11 0 2344.74 0 2236V1949.09C0 1840.35 0 1785.97 25.0382 1740.76C26.0486 1738.94 27.0875 1737.13 28.1545 1735.34C54.5946 1690.93 101.563 1663.54 195.499 1608.75L435.499 1468.77Z'
              fill='#67FAAB'
            ></path>
            <path
              d='M1408.34 1117.02C1501.69 1064.15 1548.36 1037.72 1599.41 1036.93C1601.47 1036.9 1603.53 1036.9 1605.59 1036.93C1656.64 1037.72 1703.31 1064.15 1796.66 1117.02L2102.84 1290.41C2198.8 1344.76 2246.78 1371.93 2273.85 1416.73C2274.94 1418.53 2276.01 1420.36 2277.04 1422.2C2302.68 1467.83 2302.68 1522.97 2302.68 1633.25V1966.97C2302.68 2077.25 2302.68 2132.39 2277.04 2178.02C2276.01 2179.86 2274.94 2181.69 2273.85 2183.49C2246.78 2228.29 2198.8 2255.46 2102.84 2309.81L1796.66 2483.2C1703.31 2536.07 1656.64 2562.5 1605.59 2563.29C1603.53 2563.32 1601.47 2563.32 1599.41 2563.29C1548.36 2562.5 1501.69 2536.07 1408.34 2483.2L1102.16 2309.81C1006.2 2255.46 958.218 2228.29 931.147 2183.49C930.055 2181.69 928.992 2179.86 927.958 2178.02C902.318 2132.39 902.318 2077.25 902.318 1966.97V1633.25C902.318 1522.97 902.318 1467.83 927.958 1422.2C928.992 1420.36 930.055 1418.53 931.147 1416.73C958.218 1371.93 1006.2 1344.76 1102.16 1290.41L1408.34 1117.02Z'
              fill='#0CCB8A'
            ></path>
          </svg>
        </a>
      </div>
    </>
  );
}
