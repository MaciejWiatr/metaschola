import tw from "twin.macro";

const Logo = () => {
	return (
		<svg
			viewBox="0 0 1978 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<StyledPath d="M451.205 95.5454H505.818L563.5 236.273H565.955L623.636 95.5454H678.25V305H635.295V168.67H633.557L579.352 303.977H550.102L495.898 168.159H494.159V305H451.205V95.5454ZM771.109 308.068C754.949 308.068 741.04 304.795 729.381 298.25C717.79 291.636 708.859 282.295 702.586 270.227C696.313 258.091 693.177 243.739 693.177 227.17C693.177 211.011 696.313 196.83 702.586 184.625C708.859 172.42 717.688 162.909 729.074 156.091C740.529 149.273 753.961 145.864 769.37 145.864C779.734 145.864 789.381 147.534 798.313 150.875C807.313 154.148 815.154 159.091 821.836 165.705C828.586 172.318 833.836 180.636 837.586 190.659C841.336 200.614 843.211 212.273 843.211 225.636V237.602H710.563V210.602H802.199C802.199 204.33 800.836 198.773 798.109 193.932C795.381 189.091 791.597 185.307 786.756 182.58C781.984 179.784 776.427 178.386 770.086 178.386C763.472 178.386 757.609 179.92 752.495 182.989C747.449 185.989 743.495 190.045 740.631 195.159C737.768 200.205 736.302 205.83 736.234 212.034V237.705C736.234 245.477 737.665 252.193 740.529 257.852C743.461 263.511 747.586 267.875 752.904 270.943C758.222 274.011 764.529 275.545 771.824 275.545C776.665 275.545 781.097 274.864 785.12 273.5C789.143 272.136 792.586 270.091 795.449 267.364C798.313 264.636 800.495 261.295 801.995 257.341L842.29 260C840.245 269.682 836.052 278.136 829.711 285.364C823.438 292.523 815.324 298.114 805.37 302.136C795.484 306.091 784.063 308.068 771.109 308.068ZM940.799 147.909V180.636H846.197V147.909H940.799ZM867.674 110.273H911.243V256.727C911.243 260.75 911.856 263.886 913.084 266.136C914.311 268.318 916.015 269.852 918.197 270.739C920.447 271.625 923.038 272.068 925.97 272.068C928.015 272.068 930.061 271.898 932.106 271.557C934.152 271.148 935.72 270.841 936.811 270.636L943.663 303.057C941.481 303.739 938.413 304.523 934.459 305.409C930.504 306.364 925.697 306.943 920.038 307.148C909.538 307.557 900.334 306.159 892.424 302.955C884.584 299.75 878.481 294.773 874.118 288.023C869.754 281.273 867.606 272.75 867.674 262.455V110.273ZM999.576 307.966C989.553 307.966 980.621 306.227 972.78 302.75C964.939 299.205 958.735 293.989 954.166 287.102C949.666 280.148 947.416 271.489 947.416 261.125C947.416 252.398 949.019 245.068 952.223 239.136C955.428 233.205 959.791 228.432 965.314 224.818C970.837 221.205 977.11 218.477 984.132 216.636C991.223 214.795 998.655 213.5 1006.43 212.75C1015.56 211.795 1022.93 210.909 1028.52 210.091C1034.11 209.205 1038.17 207.909 1040.69 206.205C1043.21 204.5 1044.47 201.977 1044.47 198.636V198.023C1044.47 191.545 1042.43 186.534 1038.34 182.989C1034.31 179.443 1028.59 177.67 1021.16 177.67C1013.31 177.67 1007.08 179.409 1002.44 182.886C997.803 186.295 994.735 190.591 993.235 195.773L952.939 192.5C954.985 182.955 959.007 174.705 965.007 167.75C971.007 160.727 978.746 155.341 988.223 151.591C997.769 147.773 1008.81 145.864 1021.36 145.864C1030.09 145.864 1038.44 146.886 1046.42 148.932C1054.46 150.977 1061.59 154.148 1067.79 158.443C1074.06 162.739 1079.01 168.261 1082.62 175.011C1086.23 181.693 1088.04 189.705 1088.04 199.045V305H1046.72V283.216H1045.5C1042.97 288.125 1039.6 292.455 1035.37 296.205C1031.14 299.886 1026.06 302.784 1020.13 304.898C1014.2 306.943 1007.35 307.966 999.576 307.966ZM1012.05 277.898C1018.46 277.898 1024.12 276.636 1029.03 274.114C1033.94 271.523 1037.79 268.045 1040.59 263.682C1043.38 259.318 1044.78 254.375 1044.78 248.852V232.182C1043.42 233.068 1041.54 233.886 1039.16 234.636C1036.84 235.318 1034.21 235.966 1031.28 236.58C1028.35 237.125 1025.42 237.636 1022.48 238.114C1019.55 238.523 1016.89 238.898 1014.51 239.239C1009.39 239.989 1004.93 241.182 1001.11 242.818C997.291 244.455 994.326 246.67 992.212 249.466C990.098 252.193 989.041 255.602 989.041 259.693C989.041 265.625 991.189 270.159 995.485 273.295C999.848 276.364 1005.37 277.898 1012.05 277.898ZM1221.89 155.784C1221.07 147.534 1217.56 141.125 1211.35 136.557C1205.15 131.989 1196.73 129.705 1186.09 129.705C1178.86 129.705 1172.76 130.727 1167.78 132.773C1162.81 134.75 1158.99 137.511 1156.33 141.057C1153.74 144.602 1152.44 148.625 1152.44 153.125C1152.31 156.875 1153.09 160.148 1154.79 162.943C1156.57 165.739 1158.99 168.159 1162.06 170.205C1165.12 172.182 1168.67 173.92 1172.69 175.42C1176.72 176.852 1181.01 178.08 1185.58 179.102L1204.4 183.602C1213.53 185.648 1221.92 188.375 1229.56 191.784C1237.19 195.193 1243.81 199.386 1249.4 204.364C1254.99 209.341 1259.32 215.205 1262.39 221.955C1265.52 228.705 1267.12 236.443 1267.19 245.17C1267.12 257.989 1263.85 269.102 1257.37 278.511C1250.97 287.852 1241.69 295.114 1229.56 300.295C1217.49 305.409 1202.93 307.966 1185.89 307.966C1168.98 307.966 1154.25 305.375 1141.7 300.193C1129.23 295.011 1119.48 287.341 1112.45 277.182C1105.5 266.955 1101.85 254.307 1101.51 239.239H1144.36C1144.84 246.261 1146.85 252.125 1150.4 256.83C1154.01 261.466 1158.82 264.977 1164.82 267.364C1170.89 269.682 1177.74 270.841 1185.37 270.841C1192.87 270.841 1199.39 269.75 1204.91 267.568C1210.5 265.386 1214.83 262.352 1217.9 258.466C1220.97 254.58 1222.5 250.114 1222.5 245.068C1222.5 240.364 1221.1 236.409 1218.31 233.205C1215.58 230 1211.56 227.273 1206.24 225.023C1200.99 222.773 1194.54 220.727 1186.91 218.886L1164.1 213.159C1146.44 208.864 1132.5 202.148 1122.27 193.011C1112.04 183.875 1106.97 171.568 1107.03 156.091C1106.97 143.409 1110.34 132.33 1117.16 122.852C1124.04 113.375 1133.49 105.977 1145.49 100.659C1157.49 95.3409 1171.12 92.6818 1186.4 92.6818C1201.94 92.6818 1215.51 95.3409 1227.1 100.659C1238.76 105.977 1247.83 113.375 1254.31 122.852C1260.78 132.33 1264.12 143.307 1264.33 155.784H1221.89ZM1352.74 308.068C1336.65 308.068 1322.81 304.659 1311.22 297.841C1299.69 290.955 1290.83 281.409 1284.62 269.205C1278.49 257 1275.42 242.955 1275.42 227.068C1275.42 210.977 1278.52 196.864 1284.73 184.727C1291 172.523 1299.9 163.011 1311.42 156.193C1322.94 149.307 1336.65 145.864 1352.53 145.864C1366.24 145.864 1378.24 148.352 1388.53 153.33C1398.83 158.307 1406.98 165.295 1412.98 174.295C1418.98 183.295 1422.28 193.864 1422.9 206H1381.78C1380.63 198.159 1377.56 191.852 1372.58 187.08C1367.67 182.239 1361.23 179.818 1353.25 179.818C1346.5 179.818 1340.6 181.659 1335.56 185.341C1330.58 188.955 1326.69 194.239 1323.9 201.193C1321.1 208.148 1319.7 216.568 1319.7 226.455C1319.7 236.477 1321.07 245 1323.8 252.023C1326.59 259.045 1330.51 264.398 1335.56 268.08C1340.6 271.761 1346.5 273.602 1353.25 273.602C1358.23 273.602 1362.69 272.58 1366.65 270.534C1370.67 268.489 1373.98 265.523 1376.57 261.636C1379.23 257.682 1380.97 252.943 1381.78 247.42H1422.9C1422.22 259.42 1418.94 269.989 1413.08 279.125C1407.28 288.193 1399.27 295.284 1389.05 300.398C1378.82 305.511 1366.72 308.068 1352.74 308.068ZM1479.96 214.182V305H1436.39V95.5454H1478.73V175.625H1480.57C1484.12 166.352 1489.85 159.091 1497.76 153.841C1505.67 148.523 1515.59 145.864 1527.52 145.864C1538.43 145.864 1547.94 148.25 1556.05 153.023C1564.23 157.727 1570.57 164.511 1575.07 173.375C1579.64 182.17 1581.89 192.705 1581.82 204.977V305H1538.26V212.75C1538.32 203.068 1535.87 195.534 1530.89 190.148C1525.98 184.761 1519.1 182.068 1510.23 182.068C1504.3 182.068 1499.05 183.33 1494.48 185.852C1489.98 188.375 1486.44 192.057 1483.85 196.898C1481.32 201.67 1480.03 207.432 1479.96 214.182ZM1672.69 308.068C1656.8 308.068 1643.06 304.693 1631.47 297.943C1619.95 291.125 1611.05 281.648 1604.78 269.511C1598.51 257.307 1595.37 243.159 1595.37 227.068C1595.37 210.841 1598.51 196.659 1604.78 184.523C1611.05 172.318 1619.95 162.841 1631.47 156.091C1643.06 149.273 1656.8 145.864 1672.69 145.864C1688.57 145.864 1702.28 149.273 1713.8 156.091C1725.39 162.841 1734.32 172.318 1740.6 184.523C1746.87 196.659 1750.01 210.841 1750.01 227.068C1750.01 243.159 1746.87 257.307 1740.6 269.511C1734.32 281.648 1725.39 291.125 1713.8 297.943C1702.28 304.693 1688.57 308.068 1672.69 308.068ZM1672.89 274.318C1680.12 274.318 1686.15 272.273 1691 268.182C1695.84 264.023 1699.48 258.364 1701.94 251.205C1704.46 244.045 1705.72 235.898 1705.72 226.761C1705.72 217.625 1704.46 209.477 1701.94 202.318C1699.48 195.159 1695.84 189.5 1691 185.341C1686.15 181.182 1680.12 179.102 1672.89 179.102C1665.6 179.102 1659.46 181.182 1654.48 185.341C1649.57 189.5 1645.86 195.159 1643.34 202.318C1640.88 209.477 1639.65 217.625 1639.65 226.761C1639.65 235.898 1640.88 244.045 1643.34 251.205C1645.86 258.364 1649.57 264.023 1654.48 268.182C1659.46 272.273 1665.6 274.318 1672.89 274.318ZM1807.5 95.5454V305H1763.94V95.5454H1807.5ZM1872.8 307.966C1862.78 307.966 1853.85 306.227 1846.01 302.75C1838.16 299.205 1831.96 293.989 1827.39 287.102C1822.89 280.148 1820.64 271.489 1820.64 261.125C1820.64 252.398 1822.24 245.068 1825.45 239.136C1828.65 233.205 1833.02 228.432 1838.54 224.818C1844.06 221.205 1850.33 218.477 1857.36 216.636C1864.45 214.795 1871.88 213.5 1879.65 212.75C1888.79 211.795 1896.15 210.909 1901.74 210.091C1907.33 209.205 1911.39 207.909 1913.91 206.205C1916.44 204.5 1917.7 201.977 1917.7 198.636V198.023C1917.7 191.545 1915.65 186.534 1911.56 182.989C1907.54 179.443 1901.81 177.67 1894.38 177.67C1886.54 177.67 1880.3 179.409 1875.66 182.886C1871.03 186.295 1867.96 190.591 1866.46 195.773L1826.16 192.5C1828.21 182.955 1832.23 174.705 1838.23 167.75C1844.23 160.727 1851.97 155.341 1861.45 151.591C1870.99 147.773 1882.04 145.864 1894.58 145.864C1903.31 145.864 1911.66 146.886 1919.64 148.932C1927.69 150.977 1934.81 154.148 1941.02 158.443C1947.29 162.739 1952.23 168.261 1955.85 175.011C1959.46 181.693 1961.27 189.705 1961.27 199.045V305H1919.95V283.216H1918.72C1916.2 288.125 1912.82 292.455 1908.6 296.205C1904.37 299.886 1899.29 302.784 1893.36 304.898C1887.43 306.943 1880.57 307.966 1872.8 307.966ZM1885.28 277.898C1891.69 277.898 1897.35 276.636 1902.26 274.114C1907.16 271.523 1911.02 268.045 1913.81 263.682C1916.61 259.318 1918.01 254.375 1918.01 248.852V232.182C1916.64 233.068 1914.77 233.886 1912.38 234.636C1910.06 235.318 1907.44 235.966 1904.51 236.58C1901.57 237.125 1898.64 237.636 1895.71 238.114C1892.78 238.523 1890.12 238.898 1887.73 239.239C1882.62 239.989 1878.15 241.182 1874.33 242.818C1870.52 244.455 1867.55 246.67 1865.44 249.466C1863.32 252.193 1862.27 255.602 1862.27 259.693C1862.27 265.625 1864.41 270.159 1868.71 273.295C1873.07 276.364 1878.6 277.898 1885.28 277.898Z" />
			<path
				d="M184 48.4974C193.901 42.7812 206.099 42.7812 216 48.4974L323.205 110.392C333.106 116.109 339.205 126.673 339.205 138.105V261.895C339.205 273.327 333.106 283.891 323.205 289.608L216 351.503C206.099 357.219 193.901 357.219 184 351.503L76.7949 289.608C66.8941 283.891 60.7949 273.327 60.7949 261.895V138.105C60.7949 126.673 66.8941 116.109 76.7949 110.392L184 48.4974Z"
				stroke="url(#paint0_linear_2_5)"
				strokeWidth="68"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_2_5"
					x1="-32"
					y1="339"
					x2="418"
					y2="30.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FEAC5E" />
					<stop offset="0.494792" stopColor="#C779D0" />
					<stop offset="1" stopColor="#4BC0C8" />
				</linearGradient>
			</defs>
		</svg>
	);
};

const StyledPath = tw.path`
	fill-current
`;

export default Logo;
