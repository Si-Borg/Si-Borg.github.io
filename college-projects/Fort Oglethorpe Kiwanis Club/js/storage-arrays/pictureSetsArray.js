"use strict";
// Script written by Silas Callahan

/*
      The folders that the pictures are stored in must match the
      value at the PICTURE_SETS_ARRAY["index of picture set"][0] 
      for the picture to be added correctly
*/
export const PICTURE_SETS_ARRAY = new Array( 
      [
            "2007 Rick Honeycutt Golf Tournament",
            "Rick_Honeycutt_Golf_Tournament_2007-01.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-02.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-03.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-04.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-05.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-06.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-08.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-09.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-10.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-11.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-12.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-13.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-14.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-15.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-16.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-17.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-19.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-20.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-21.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-23.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-24.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-25.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-26.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-27.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-29.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-30.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-31.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-32.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-33.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-34.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-35.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-37.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-38.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-39.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-40.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-41.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-42.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-43.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-44.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-45.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-46.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-47.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-48.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-49.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-50.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-51.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-52.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-54.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-55.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-56.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-57.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-58.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-59.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-60.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-61.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-62.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-63.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-64.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-65.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-66.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-69.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-70.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-71.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-73.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-74.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-75.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-76.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-77.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-78.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-79.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-80.jpg",
            "Rick_Honeycutt_Golf_Tournament_2007-81.jpg"
      ],
      [
            "2017 Rick Honeycutt Golf Tournament",
            "20171114_121942editc5-300.jpg",
            "20171114_134243editc5-300.jpg",
            "20171114_134251editc5-300.jpg",
            "20171114_153131editc5-300.jpg",
            "20171114_153151editc5-300.jpg",
            "IMG_2124editc5-300.jpg",
            "IMG_2125editc5-300.jpg",
            "IMG_2126editc5-300.jpg",
            "IMG_2127editc5-300.jpg",
            "IMG_2128editc5-300.jpg",
            "IMG_2129editc5-300.jpg",
            "IMG_2130editc5-300.jpg",
            "IMG_2131editc5-300.jpg",
            "IMG_2132editc5-300.jpg",
            "IMG_2133editc5-300.jpg",
            "IMG_2134editc5-300.jpg",
            "IMG_2135editc5-300.jpg",
            "IMG_2136editc5-300.jpg",
            "IMG_2137editc5-300.jpg",
            "IMG_2138editc5-300.jpg",
            "IMG_2139editc5-300.jpg",
            "IMG_2140editc5-300.jpg",
            "IMG_2141editc5-300.jpg",
            "IMG_2142editc5-300.jpg",
            "IMG_2143editc5-300.jpg",
            "IMG_2144editc5-300.jpg",
            "IMG_2145editc5-300.jpg",
            "IMG_2146editc5-300.jpg",
            "IMG_2147editc5-300.jpg",
            "IMG_2148editc5-300.jpg",
            "IMG_2149editc5-300.jpg",
            "IMG_2150editc5-300.jpg",
            "IMG_2151editc5-300.jpg",
            "IMG_2152editc5-300.jpg",
            "IMG_2153editc5-300.jpg",
            "IMG_2154editc5-300.jpg",
            "IMG_2155editc5-300.jpg",
            "IMG_2156editc5-300.jpg",
            "IMG_2157editc5-300.jpg",
            "IMG_2158editc5-300.jpg",
            "IMG_2159editc5-300.jpg",
            "IMG_2160editc5-300.jpg",
            "IMG_2161editc5-300.jpg",
            "IMG_2162editc5-300.jpg",
            "IMG_2163editc5-300.jpg",
            "IMG_2164editc5-300.jpg",
            "IMG_2165editc5-300.jpg",
            "IMG_2166editc5-300.jpg",
            "IMG_2167editc5-300.jpg",
            "IMG_2168editc5-300.jpg",
            "IMG_2169dwighteditc5-300.jpg",
            "IMG_2170editc5-300.jpg",
            "IMG_2171editc5-300.jpg",
            "IMG_2172editc5-300.jpg",
            "IMG_2173editc5-300.jpg",
            "IMG_2174editc5-300.jpg",
            "IMG_2175editc5-300.jpg",
            "IMG_2176editc5-300.jpg",
            "IMG_2177editc5-300.jpg",
            "IMG_2178editc5-300.jpg",
            "IMG_2179editc5-300.jpg",
            "IMG_2180editc5-300.jpg",
            "IMG_2181editc5-300.jpg",
            "IMG_2182editc5-300.jpg",
            "IMG_2183editc5-300.jpg",
            "IMG_2184editc5-300.jpg",
            "IMG_2185editc5-300.jpg",
            "IMG_2186editc5-300.jpg",
            "IMG_2187editc5-300.jpg",
            "IMG_2188editc5-300.jpg",
            "IMG_2189editc5-300.jpg",
            "IMG_2190editc5-300.jpg",
            "IMG_2191editc5-300.jpg",
            "IMG_2192editc5-300.jpg",
            "IMG_2193editc5-300.jpg",
            "IMG_2194editc5-300.jpg",
            "IMG_2195editc5-300.jpg",
            "IMG_2196editc5-300.jpg",
            "IMG_2197editc5-300.jpg",
            "IMG_2198editc5-300.jpg",
            "IMG_2199editc5-300.jpg",
            "IMG_2200editc5-300.jpg",
            "IMG_2201editc5-300.jpg",
            "IMG_2202editc5-300.jpg",
            "IMG_2203editc5-300.jpg",
            "IMG_2204editc5-300.jpg",
            "IMG_2205editc5-300.jpg",
            "IMG_2206editc5-300.jpg",
            "IMG_2207editc5-300.jpg",
            "IMG_2208editc5-300.jpg",
            "IMG_2209editc5-300.jpg",
            "IMG_2210editc5-300.jpg",
            "IMG_2211editc5-300.jpg",
            "IMG_2212editc5-300.jpg",
            "IMG_2213editc5-300.jpg",
            "IMG_2214editc5-300.jpg",
            "IMG_2215editc5-300.jpg",
            "IMG_2216editc5-300.jpg",
            "IMG_2217editc5-300.jpg",
            "IMG_2218editc5-300.jpg",
            "IMG_2219editc5-300.jpg",
            "IMG_2220editc5-300.jpg",
            "IMG_2221editc5-300.jpg",
            "IMG_2222editc5-300.jpg",
            "IMG_2223editc5-300.jpg",
            "IMG_2224editc5-300.jpg",
            "IMG_2225editc5-300.jpg",
            "IMG_2226editc5-300.jpg",
            "IMG_2227editc5-300.jpg",
            "IMG_2228editc5-300.jpg",
            "IMG_2229editc5-300.jpg",
            "IMG_2230editc5-300.jpg",
            "IMG_2231editc5-300.jpg",
            "IMG_2232editc5-300.jpg",
            "IMG_2233editc5-300.jpg",
            "IMG_2234editc5-300.jpg",
            "IMG_2235editc5-300.jpg",
            "IMG_2236editc5-300.jpg",
            "IMG_2237editc5-300.jpg",
            "IMG_2238editc5-300.jpg",
            "IMG_2239editc5-300.jpg",
            "IMG_2240editc5-300.jpg",
            "IMG_2241editc5-300.jpg",
            "IMG_2242editc5-300.jpg",
            "IMG_2243editc5-300.jpg",
            "IMG_2244editc5-300.jpg",
            "IMG_2245editc5-300.jpg",
            "IMG_2246editc5-300.jpg",
            "IMG_2247editc5-300.jpg",
            "IMG_2248editc5-300.jpg",
            "IMG_2249editc5-300.jpg",
            "IMG_2250editc5-300.jpg",
            "IMG_2251editc5-300.jpg",
            "IMG_2252editc5-300.jpg",
            "IMG_2253editc5-300.jpg",
            "IMG_2254editc5-300.jpg",
            "IMG_2255editc5-300.jpg",
            "IMG_2256editc5-300.jpg",
            "IMG_2257editc5-300.jpg",
            "IMG_2258editc5-300.jpg",
            "IMG_2259editc5-300.jpg",
            "IMG_2260editc5-300.jpg",
            "IMG_2261editc5-300.jpg",
            "IMG_2262editc5-300.jpg",
            "IMG_2263editc5-300.jpg",
            "IMG_2264editc5-300.jpg",
            "IMG_2265editc5-300.jpg",
            "IMG_2266editc5-300.jpg",
            "IMG_2267editc5-300.jpg",
            "IMG_2268editc5-300.jpg",
            "IMG_2269editc5-300.jpg",
            "IMG_2270editc5-300.jpg",
            "IMG_2271editc5-300.jpg",
            "IMG_2272editc5-300.jpg",
            "IMG_2273editc5-300.jpg",
            "IMG_2274editc5-300.jpg",
            "IMG_2275editc5-300.jpg",
            "IMG_2276editc5-300.jpg",
            "IMG_2277editc5-300.jpg"
      ],
      [
            "Kannonball 5K Run 2023",
            "IMG_9793editc5-400.jpg",
            "IMG_9794editc5-400 (1).jpg",
            "IMG_9794editc5-400.jpg",
            "IMG_9796editc5-400.jpg",
            "IMG_9797editc5-400.jpg",
            "IMG_9798editc5-400.jpg",
            "IMG_9799editc5-400.jpg",
            "IMG_9800editc5-400.jpg",
            "IMG_9801editc5-400.jpg",
            "IMG_9802editc5-400.jpg",
            "IMG_9803editc5-400.jpg",
            "IMG_9804editc5-400.jpg",
            "IMG_9805editc5-400.jpg",
            "IMG_9806editc5-400.jpg",
            "IMG_9807editc5-400.jpg",
            "IMG_9808initial club fake finish editc5-400.jpg",
            "IMG_9809initial club fake finishers editc5-400.jpg",
            "IMG_9810editc5-400.jpg",
            "IMG_9811editc5-400.jpg",
            "IMG_9812editc5-400.jpg",
            "IMG_9813editc5-400.jpg",
            "IMG_9814editc5-400.jpg",
            "IMG_9815editc5-400.jpg",
            "IMG_9816editc5-400.jpg",
            "IMG_9817editc5-400.jpg",
            "IMG_9818editc5-400.jpg",
            "IMG_9819editc5-400.jpg",
            "IMG_9820cropeditc5-400.jpg",
            "IMG_9820editc5-400.jpg",
            "IMG_9821editc5-400 (1).jpg",
            "IMG_9821editc5-400.jpg",
            "IMG_9822editc5-400.jpg",
            "IMG_9823editc5-400.jpg",
            "IMG_9824editc5-400.jpg",
            "IMG_9825editc5-400.jpg",
            "IMG_9826editc5-400.jpg"
      ]
);