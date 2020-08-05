export const defaultPersonData = {
  name: "",
  location: "",
  age: "",
  childLost: false,
  siblingLost: false,
  parentLost: false,
  disabled: false
};

export const cities = [
  "Delhi",
  "Tamil Nadu",
  "Maharashtra",
  "Karnataka",
  "Uttar Pradesh",
  "Gujarat",
  "Rajasthan",
  "Punjab",
  "Uttarakhand",
  "Madhya Pradesh",
  "Kerala",
  "Andhra Pradesh",
  "Bihar",
  "Assam"
];

export const MAX_DISTANCE = 3409;

export const distanceBetweenCities = [
  [0, 2409, 1303, 1862, 500, 1095, 404, 374, 351, 812, 2607, 1838, 1158, 2067],
  [
    2409,
    0,
    1223,
    693,
    2188,
    1967,
    2399,
    2849,
    2788,
    1732,
    307,
    678,
    2182,
    3109
  ],
  [1303, 1223, 0, 587, 1205, 833, 1028, 1640, 1628, 681, 1253, 813, 1495, 2491],
  [1862, 693, 587, 0, 1753, 1316, 1748, 2316, 2384, 1297, 639, 512, 2023, 3020],
  [500, 2188, 1205, 1753, 0, 1398, 780, 912, 606, 654, 2317, 1548, 623, 1515],
  [
    1095,
    1967,
    833,
    1316,
    1398,
    0,
    735,
    1305,
    1424,
    946,
    1888,
    1658,
    1798,
    2912
  ],
  [404, 2399, 1028, 1748, 780, 735, 0, 565, 777, 795, 2310, 1773, 1385, 2294],
  [374, 2849, 1640, 2316, 912, 1305, 565, 0, 530, 1169, 2965, 2196, 1516, 2425],
  [351, 2788, 1628, 2384, 606, 1424, 777, 530, 0, 1108, 2903, 2134, 1221, 2124],
  [812, 1732, 681, 1297, 654, 946, 795, 1169, 1108, 0, 1861, 1092, 941, 1937],
  [
    2607,
    307,
    1253,
    639,
    2317,
    1888,
    2310,
    2965,
    2903,
    1861,
    0,
    878,
    2607,
    3409
  ],
  [1838, 678, 813, 512, 1548, 1658, 1773, 2196, 2134, 1092, 878, 0, 2519, 1591],
  [
    1158,
    2182,
    1495,
    2023,
    623,
    1798,
    1385,
    1516,
    1221,
    941,
    2607,
    2519,
    0,
    1096
  ],
  [
    2067,
    3109,
    2491,
    3020,
    1515,
    1912,
    2294,
    2425,
    2124,
    1937,
    3409,
    1591,
    1096,
    0
  ]
];