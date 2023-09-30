import { useEffect, useMemo, useState } from "react";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Card } from "reactstrap";
import {
  Ratios,
  _2019,
  _2020,
  _2021,
  _2022,
  _2023,
  PaymentStatus,

} from "./TransactionColumn";
import { TableContainer } from "../../components/Common/TableContainer";
import {Donnes1, Donnes2,Donnes3,Donnes4,Donnes5,Donnes6,
  data1,data2,data3,data4,data5,data6,data11,data12,data13,data21,data22,data23,
  data31,data32,data33,
  data41,data42,data43,
  data51,data52
} from "../../data.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightDots,faTable} from "@fortawesome/free-solid-svg-icons";
import Charts from "react-apexcharts";


const Transactions = () => {
  const columns = useMemo(
    () => [
      {
        Header: "#",
        filterable: true,
        disableFilters: true,
        Cell: cellProps => {
          return <input type="checkbox" className="form-check-input" />;
        },
      },
      {
        Header: "Ratios", 
        accessor: "Ratios",
        filterable: true,
        disableFilters: true,
        Cell: cellProps => {
          return <Ratios {...cellProps} />;
        },
      },
      {
        Header: "2019",
        accessor: "_2019",
        disableFilters: true,
        filterable: true,
        Cell: cellProps => {
          return <_2022 {...cellProps} />;
        },
      },
      {
        Header: "2020",
        accessor: "_2020",
        disableFilters: true,
        filterable: true,
        Cell: cellProps => {
          return <_2020 {...cellProps} />;
        },
      },
      {
        Header: "2021",
        accessor: "_2021",
        disableFilters: true,
        filterable: true,
        Cell: cellProps => {
          return <_2021 {...cellProps} />;
        },
      },
      {
        Header: "2022",
        accessor: "_2022",
        disableFilters: true,
        filterable: true,
        Cell: cellProps => {
          return <_2022 {...cellProps} />;
        },
      },
      {
        Header: "2023",
        accessor: "_2023",
        disableFilters: true,
        filterable: true,
        Cell: cellProps => {
          return <_2022 {...cellProps} />;
        },
      },
      {
        Header: "Payment Status",
        accessor: "status",
        disableFilters: true,
        filterable: true,
        Cell: cellProps => {
          return <PaymentStatus {...cellProps} />;
        },
      },
      /* {
         Header: "View Details",
       disableFilters: true,
        accessor: "view",
        Cell: cellProps => {
           return (
           <Button
               type="button"
               color="primary"
               className="btn-sm btn-rounded"
             onClick={toggleViewModal}
             >
              View Details
            </Button>
           );
         },
       },*/
    ],
    []
  );
  const [TabUser,setTab]=useState([]);

  const [Saisie,setSaisie]=useState("");
  
  useEffect(()=>{
    /*const Donnes=Donnes1.concat(Donnes2);*/
   /* const Donnes=[...Donnes1,...Donnes2,...Donnes3,...Donnes4,...Donnes5,...Donnes6]*/
    const aziz=Donnes1.filter(
      ligne=>ligne.Ratios.toLowerCase().startsWith(Saisie)
    )
    setTab(aziz)
  },[Saisie])
  const [afficheCH,setAfficheCH]=useState(false);
  const [afficheT,setAfficheT]=useState(true);
  const [afficheCH1,setAfficheCH1]=useState(false);
  const [afficheT1,setAfficheT1]=useState(true);
  const [afficheCH2,setAfficheCH2]=useState(false);
  const [afficheT2,setAfficheT2]=useState(true);
  const [afficheCH3,setAfficheCH3]=useState(false);
  const [afficheT3,setAfficheT3]=useState(true);
  const [afficheCH4,setAfficheCH4]=useState(false);
  const [afficheT4,setAfficheT4]=useState(true);
  const [afficheCH5,setAfficheCH5]=useState(false);
  const [afficheT5,setAfficheT5]=useState(true);
  const display1=()=>{ 
    setAfficheCH(!afficheCH);
   setAfficheT(!afficheT);
  }
  const display2=()=>{
    setAfficheCH1(!afficheCH1);
   setAfficheT1(!afficheT1);
  }
  const display3=()=>{
    setAfficheCH2(!afficheCH2);
   setAfficheT2(!afficheT2);
  }
  const display4=()=>{
    setAfficheCH3(!afficheCH3);
   setAfficheT23(!afficheT3);
  }
  const display5=()=>{
    setAfficheCH4(!afficheCH4);
   setAfficheT4(!afficheT4);
  }
  const display6=()=>{
    setAfficheCH5(!afficheCH5);
   setAfficheT5(!afficheT5);
  }
  
 


  return (
    <>
      <Breadcrumbs
        title="Diagnostic"
        breadcrumbItem="Diagnostic"
        />
      <Card className="mt-3">
        <div className="mb-2 h5 card-title">Search :
        </div>
        <div class=" mb-4 input-group w-25 rounded ">
  <input type="search" className="form-control" 
  placeholder="Search" aria-label="Search" onInput={(e)=>setSaisie(e.target.value)} />
  
</div>
<h4>1. Financial Statement Analysis</h4><br></br>
<br></br>
<h5>A. Overview Panel: Key Financial Metrics</h5>

          {afficheT&&
 <FontAwesomeIcon 
 icon={faArrowUpRightDots}
 className="clickable-icon"
onClick={display1}
/>
}
{afficheT&&<TableContainer
            columns={columns}
            data={TabUser}
            customPageSize={6}
          />
          
}
{afficheCH&&<FontAwesomeIcon 
           icon={faTable}
           className="clickable-icon"
  onClick={display1}
   />
  
  }
  {
    afficheCH&&
      
    <Charts type="line"
    width={500}
    height={400}
    series={
     [
       {
         name:"Revenue",
         data:data1
       },
       {
         name:"Expenses",
         data:data3
       },
       {
        name:"Net Income",
        data:data4
       },
       {
        name:"Total Assets",
        data:data5
       },
       {
        name:"Total Liabilities",
        data:data6
       }
     ]
    }
    options={
     {title:{text:"Ratios ($M)"},
       xaxis:{
         title:{text:"Years"},
         categories:data2
       },
       yaxis:{text:"Ratios ($M)"}
     }
    }
    /> 
  }
 
          <br></br>
          <br></br>
          <h4>2. Working Capital (WC) and Treasury Analysis</h4>
          <br></br>
          <h5>A. Overview Panel: Composition of FR, BFR, and TN:</h5>
          
          {afficheT1&&
 <FontAwesomeIcon 
 icon={faArrowUpRightDots}
 className="clickable-icon"
onClick={display2}
/>
}
{afficheT1&&<TableContainer
            columns={columns}
            data={Donnes2}
            customPageSize={6}
          />
          
}
{afficheCH1&&<FontAwesomeIcon 
           icon={faTable}
           className="clickable-icon"
  onClick={display2}
   />
  
  }
  {
    afficheCH1&&
      
    <Charts type="line"
    width={500}
    height={400}
    series={
     [
       {
         name:"FR",
         data:data11
       },
       {
         name:"BFR",
         data:data12
       },
       {
        name:"TN",
        data:data13
       }
     ]
    }
    options={
     {title:{text:"Ratios ($M)"},
       xaxis:{
         title:{text:"Years"},
         categories:data2
       },
       yaxis:{text:"Ratios ($M)"}
     }
    }
    /> 
  }
          

          <br></br>
          <h4>3. Financial Ratios</h4>
          <br></br>
          <h5>A. Profitability Ratio:</h5>
          {afficheT2&&
 <FontAwesomeIcon 
 icon={faArrowUpRightDots}
 className="clickable-icon"
onClick={display3}
/>
}
{afficheT2&&<TableContainer
            columns={columns}
            data={Donnes3}
            customPageSize={6}
          />
          
}
{afficheCH2&&<FontAwesomeIcon 
           icon={faTable}
           className="clickable-icon"
  onClick={display3}
   />
  
  }
  {
    afficheCH2&&
      
    <Charts type="line"
    width={500}
    height={400}
    series={
     [
       {
         name:"Gros Profit Margin",
         data:data21
       },
       {
         name:"Net Profit Margin",
         data:data22
       },
       {
        name:"Return on Equity",
        data:data23
       }
     ]
    }
    options={
     {title:{text:"Ratios (%)"},
       xaxis:{
         title:{text:"Years"},
         categories:data2
       },
       yaxis:{text:"Ratios (%)"}
     }
    }
    /> 
  }
          <br></br>
          <h5>B. Leverage Ratios:</h5>
          {
            afficheT3&&<FontAwesomeIcon 
            icon={faArrowUpRightDots}
            className="clickable-icon"
           onClick={display4}
           />
          }
          {
            afficheT3&&<TableContainer
            columns={columns}
            data={Donnes4}
            customPageSize={6}
          />
          }
          {afficheCH3&&<FontAwesomeIcon 
           icon={faTable}
           className="clickable-icon"
  onClick={display4}
   />
  
  }
  {
    afficheCH3&&
      
    <Charts type="line"
    width={500}
    height={400}
    series={
     [
       {
         name:"Debt to Equity Ratio",
         data:data31
       },
       {
         name:"Debt Ratio",
         data:data32
       },
       {
        name:"Interest Coverage Ratio",
        data:data33
       }
     ]
    }
    options={
     {title:{text:"Ratios (%)"},
       xaxis:{
         title:{text:"Years"},
         categories:data2
       },
       yaxis:{text:"Ratios (%)"}
     }
    }
    /> 
  }
          <br></br>
          <h5>C. Asset Turnover Ratios:</h5>
          {
            afficheT4&&<FontAwesomeIcon 
            icon={faArrowUpRightDots}
            className="clickable-icon"
           onClick={display5}
           />
          }
          {afficheT4&&<TableContainer
            columns={columns}
            data={Donnes5}
            customPageSize={6}
          />}
          
          {afficheCH4&&<FontAwesomeIcon 
           icon={faTable}
           className="clickable-icon"
  onClick={display5}
   />
  
  }
  {
    afficheCH4&&
      
    <Charts type="line"
    width={500}
    height={400}
    series={
     [
       {
         name:"Asset Turnover Ratio",
         data:data41
       },
       {
         name:"Inventory Turnover",
         data:data42
       },
       {
        name:"Receivables Turnover",
        data:data43
       }
     ]
    }
    options={
     {title:{text:"Ratios (%)"},
       xaxis:{
         title:{text:"Years"},
         categories:data2
       },
       yaxis:{text:"Ratios (%)"}
     }
    }
    /> 
  }
          <br></br>
          <br></br>
          <h4>4. Market Value Ratios:</h4>
          {
            afficheT5&&<FontAwesomeIcon 
            icon={faArrowUpRightDots}
            className="clickable-icon"
           onClick={display6}
           />
          }
          {afficheT5&&<TableContainer
            columns={columns}
            data={Donnes6}
            customPageSize={6}
          />}
         {afficheCH5&&<FontAwesomeIcon 
           icon={faTable}
           className="clickable-icon"
  onClick={display6}
   />
  
  }
  {
    afficheCH5&&
      
    <Charts type="line"
    width={500}
    height={400}
    series={
     [
       {
         name:" Earnings Per Share",
         data:data51
       },
       {
         name:"Price-to-Earnings Ratio",
         data:data52
       }
     ]
    }
    options={
     {title:{text:"Ratios (%)"},
       xaxis:{
         title:{text:"Years"},
         categories:data2
       },
       yaxis:{text:"Ratios (%)"}
     }
    }
    /> 
  }
      </Card>
    </>
  )
}

export default Transactions;
