const periodData = [
  {
    name: "Clothing",
    data: [44, 55, 41, 67, 12, 76, 16, 43, 18, 24, 33, 45]
  },
  {
    name: "Shoes",
    data: [3, 12, 34, 7, 27, 18, 14, 23, 11, 13, 25, 21]
  },
  {
    name: "Accessories",
    data: [10, 11, 7, 15, 21, 12, 8, 9, 18, 12, 20, 17]
  },
]


const Donnes1=[
  {Ratios:"Revenue ($M)",_2019:"200",_2020:"210",_2021:"220",_2022:"230",_2023:"240",status:"Paid"},
  {Ratios:"Expenses ($M)",_2019:"150",_2020:"157",_2021:"165",_2022:"172",_2023:"180",status:"Refund"},
  {Ratios:"Net Income ($M)",_2019:"50",_2020:"53",_2021:"55",_2022:"58",_2023:"60",status:"Paid"},
  {Ratios:"Total Assets ($M)",_2019:"500",_2020:"520",_2021:"540",_2022:"560",_2023:"580",status:"Refund"},
  {Ratios:"Total Liabilities ($M)",_2019:"300",_2020:"310",_2021:"320",_2022:"330",_2023:"340",status:"Paid"},
];



const data1=[200,220,230,210,240];
const data3=[150,165,180,172,157];
const data4=[50,53,60,58,55];
const data5=[500,540,580,560,520];
const data6=[300,320,340,330,310];

const data2=[2019,2020,2021,2022,2023];

/*
**1. Financial Statement Analysis**
  
   **A. Overview Panel: Key Financial Metrics**
   

| Year | Revenue ($M) | Expenses ($M) | Net Income ($M) | Total Assets ($M) | Total Liabilities ($M) |
|------|--------------|---------------|-----------------|-------------------|------------------------|
| 2019 | 200          | 150           | 50              | 500               | 300                    |
| 2020 | 210          | 157           | 53              | 520               | 310                    |
| 2021 | 220          | 165           | 55              | 540               | 320                    |
| 2022 | 230          | 172           | 58              | 560               | 330                    |
| 2023 | 240          | 180           | 60              | 580               | 340                    |


```js
[
  {
    "Year": 2019,
    "Revenue ($M)": 200,
    "Expenses ($M)": 150,
    "Net Income ($M)": 50,
    "Total Assets ($M)": 500,
    "Total Liabilities ($M)": 300
  },
  {
    "Year": 2020,
    "Revenue ($M)": 210,
    "Expenses ($M)": 157,
    "Net Income ($M)": 53,
    "Total Assets ($M)": 520,
    "Total Liabilities ($M)": 310
  },
  {
    "Year": 2021,
    "Revenue ($M)": 220,
    "Expenses ($M)": 165,
    "Net Income ($M)": 55,
    "Total Assets ($M)": 540,
    "Total Liabilities ($M)": 320
  },
  {
    "Year": 2022,
    "Revenue ($M)": 230,
    "Expenses ($M)": 172,
    "Net Income ($M)": 58,
    "Total Assets ($M)": 560,
    "Total Liabilities ($M)": 330
  },
  {
    "Year": 2023,
    "Revenue ($M)": 240,
    "Expenses ($M)": 180,
    "Net Income ($M)": 60,
    "Total Assets ($M)": 580,
    "Total Liabilities ($M)": 340
  }
]
*/
const Donnes2=[
  {Ratios:"FR ($M)",_2019:"100",_2020:"105",_2021:"110",_2022:"115",_2023:"120",status:"Paid"},
  {Ratios:"BFR ($M)",_2019:"50",_2020:"52",_2021:"54",_2022:"56",_2023:"58",status:"Refund"},
  {Ratios:"TN ($M)",_2019:"50",_2020:"53",_2021:"56",_2022:"59",_2023:"62",status:"Paid"}
];
const data11=[100,105,120,115,110];
const data12=[50,52,58,56,54];
const data13=[50,53,62,56,59];



/*
```
**2. Working Capital (WC) and Treasury Analysis**

   **A. Overview Panel: Composition of FR, BFR, and TN**
   

| Year | FR ($M) | BFR ($M) | TN ($M) |
|------|---------|----------|---------|
| 2019 | 100     | 50       | 50      |
| 2020 | 105     | 52       | 53      |
| 2021 | 110     | 54       | 56      |
| 2022 | 115     | 56       | 59      |
| 2023 | 120     | 58       | 62      |

```js
[
  {
    "Year": 2019,
    "FR ($M)": 100,
    "BFR ($M)": 50,
    "TN ($M)": 50
  },
  {
    "Year": 2020,
    "FR ($M)": 105,
    "BFR ($M)": 52,
    "TN ($M)": 53
  },
  {
    "Year": 2021,
    "FR ($M)": 110,
    "BFR ($M)": 54,
    "TN ($M)": 56
  },
  {
    "Year": 2022,
    "FR ($M)": 115,
    "BFR ($M)": 56,
    "TN ($M)": 59
  },
  {
    "Year": 2023,
    "FR ($M)": 120,
    "BFR ($M)": 58,
    "TN ($M)": 62
  }
]

```
**3. Financial Ratios**

   **A. Profitability Ratios**
   

| Year | Gross Profit Margin (%) | Net Profit Margin (%) | Return on Equity (%) |
|------|-------------------------|-----------------------|----------------------|
| 2019 | 30                      | 10                    | 20                   |
| 2020 | 31                      | 11                    | 21                   |
| 2021 | 32                      | 12                    | 22                   |
| 2022 | 33                      | 13                    | 23                   |
| 2023 | 34                      | 14                    | 24                   |

*/
  const Donnes3=[
    {Ratios:"Gros Profit Margin (%)",_2019:"30",_2020:"31",_2021:"32",_2022:"33",_2023:"34",status:"Paid"},
    {Ratios:"Net Profit Margin (%)",_2019:"10",_2020:"11",_2021:"12",_2022:"13",_2023:"14",status:"Refund"},
    {Ratios:"Return on Equity (%)",_2019:"20",_2020:"21",_2021:"22",_2022:"23",_2023:"24",status:"Paid"}
  ];
  const data21=[30,32,34,33,31];
  const data22=[10,12,14,11,13];
  const data23=[20,24,23,21,22];
  /*
```js
[
  {
    "Year": 2019,
    "Gross Profit Margin (%)": 30,
    "Net Profit Margin (%)": 10,
    "Return on Equity (%)": 20
  },
  {
    "Year": 2020,
    "Gross Profit Margin (%)": 31,
    "Net Profit Margin (%)": 11,
    "Return on Equity (%)": 21
  },
  {
    "Year": 2021,
    "Gross Profit Margin (%)": 32,
    "Net Profit Margin (%)": 12,
    "Return on Equity (%)": 22
  },
  {
    "Year": 2022,
    "Gross Profit Margin (%)": 33,
    "Net Profit Margin (%)": 13,
    "Return on Equity (%)": 23
  },
  {
    "Year": 2023,
    "Gross Profit Margin (%)": 34,
    "Net Profit Margin (%)": 14,
    "Return on Equity (%)": 24
  }
]

```
   **B. Leverage Ratios**
   

| Year | Debt to Equity Ratio | Debt Ratio | Interest Coverage Ratio |
|------|----------------------|------------|------------------------|
| 2019 | 1.5                  | 0.6        | 3                      |
| 2020 | 1.4                  | 0.58       | 3.2                    |
| 2021 | 1.3                  | 0.56       | 3.4                    |
| 2022 | 1.2                  | 0.54       | 3.6                    |
| 2023 | 1.1                  | 0.52       | 3.8                    |
*/
const Donnes4=[
  {Ratios:"Debt to Equity Ratio",_2019:"1.5",_2020:"1.4",_2021:"1.3",_2022:"1.2",_2023:"1.1",status:"Paid"},
    {Ratios:"Debt Ratio",_2019:"0.6",_2020:"0.58",_2021:"0.56",_2022:"0.54",_2023:"0.52",status:"Refund"},
    {Ratios:"Interest Coverage Ratio",_2019:"3",_2020:"3.2",_2021:"3.4",_2022:"3.6",_2023:"3.8",status:"Paid"}
];

const  data31=[1.2,1.3,1.5,1.4,1.1];
const   data32=[0.54,0.56,0.6,0.58,0.52];
 const data33=[3,3.2,3.8,3.6,3.4];
        
/*
```js
[
  {
    "Year": 2019,
    "Debt to Equity Ratio": 1.5,
    "Debt Ratio": 0.6,
    "Interest Coverage Ratio": 3
  },
  {
    "Year": 2020,
    "Debt to Equity Ratio": 1.4,
    "Debt Ratio": 0.58,
    "Interest Coverage Ratio": 3.2
  },
  {
    "Year": 2021,
    "Debt to Equity Ratio": 1.3,
    "Debt Ratio": 0.56,
    "Interest Coverage Ratio": 3.4
  },
  {
    "Year": 2022,
    "Debt to Equity Ratio": 1.2,
    "Debt Ratio": 0.54,
    "Interest Coverage Ratio": 3.6
  },
  {
    "Year": 2023,
    "Debt to Equity Ratio": 1.1,
    "Debt Ratio": 0.52,
    "Interest Coverage Ratio": 3.8
  }
]

```
   **C. Asset Turnover Ratios**
   

| Year | Asset Turnover Ratio | Inventory Turnover | Receivables Turnover |
|------|----------------------|--------------------|----------------------|
| 2019 | 2.5                  | 6                 | 8                    |
| 2020 | 2.6                  | 6.2               | 8.1                  |
| 2021 | 2.7                  | 6.4               | 8.2                  |
| 2022 | 2.8                  | 6.6               | 8.3                  |
| 2023 | 2.9                  | 6.8               | 8.4                  |
*/
const Donnes5=[
  {Ratios:" Asset Turnover Ratio",_2019:"2.5",_2020:"2.6",_2021:"2.7",_2022:"2.8",_2023:"2.9",status:"Paid"},
  {Ratios:"Inventory Turnover",_2019:"6",_2020:"6.2",_2021:"6.4",_2022:"6.6",_2023:"6.8",status:"Refund"},
  {Ratios:"Receivables Turnover",_2019:"8",_2020:"8.1",_2021:"8.2",_2022:"8.3",_2023:"8.4",status:"Paid"}
];

const data41=[2.5,2.6,2.9,2.8,2.7];
const data42=[6,6.2,6.8,6.6,6.4];
const data43=[8,8.1,8.4,8.3,8.2];

/*
```js
[
  {
    "Year": 2019,
    "Asset Turnover Ratio": 2.5,
    "Inventory Turnover": 6,
    "Receivables Turnover": 8
  },
  {
    "Year": 2020,
    "Asset Turnover Ratio": 2.6,
    "Inventory Turnover": 6.2,
    "Receivables Turnover": 8.1
  },
  {
    "Year": 2021,
    "Asset Turnover Ratio": 2.7,
    "Inventory Turnover": 6.4,
    "Receivables Turnover": 8.2
  },
  {
    "Year": 2022,
    "Asset Turnover Ratio": 2.8,
    "Inventory Turnover": 6.6,
    "Receivables Turnover": 8.3
  },
  {
    "Year": 2023,
    "Asset Turnover Ratio": 2.9,
    "Inventory Turnover": 6.8,
    "Receivables Turnover": 8.4
  }
]

```
**4. Market Value Ratios**


| Year | Earnings Per Share ($) | Price-to-Earnings Ratio |
|------|-------------------------|------------------------|
| 2019 | 1.5                     | 20                     |
| 2020 | 1.6                     | 22                     |
| 2021 | 1.7                     | 24                     |
| 2022 | 1.8                     | 26                     |
| 2023 | 1.9                     | 28                     |
*/
const Donnes6=[
  {Ratios:" Earnings Per Share ($)",_2019:"1.5",_2020:"2.6",_2021:"1.7",_2022:"1.8",_2023:"1.9",status:"Paid"},
  {Ratios:"Price-to-Earnings Ratio",_2019:"20",_2020:"22",_2021:"24",_2022:"26",_2023:"28",status:"Refund"}
]
const data51=[1.5,2.6,1.7,1.8,1.9];
const data52=[20,22,28,26,24];

/*
```js
[
  {
    "Year": 2019,
    "Earnings Per Share ($)": 1.5,
    "Price-to-Earnings Ratio": 20
  },
  {
    "Year": 2020,
    "Earnings Per Share ($)": 1.6,
    "Price-to-Earnings Ratio": 22
  },
  {
    "Year": 2021,
    "Earnings Per Share ($)": 1.7,
    "Price-to-Earnings Ratio": 24
  },
  {
    "Year": 2022,
    "Earnings Per Share ($)": 1.8,
    "Price-to-Earnings Ratio": 26
  },
  {
    "Year": 2023,
    "Earnings Per Share ($)": 1.9,
    "Price-to-Earnings Ratio": 28
  } 
]

```

This dummy data can be visualized in different chart types, as suggested in the dashboard proposal. Note that these numbers are completely hypothetical and are meant for demonstration purposes only. Actual financial data would need to be sourced from the company's official statements or relevant databases.



*/
export { periodData, Donnes1, Donnes2,Donnes3,Donnes4,Donnes5,Donnes6,
  data1,data2,data3,data4,data5,data6,
  data11,data12,data13,
  data21,data22,data23,
data31,data32,data33,
data41,data42,data43,
data51,data52
}
