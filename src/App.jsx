import "./App.css";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "./components/Invoice";
import invoiceData from "./data/invoice-data";
import ReactPDF from "@react-pdf/renderer";

function App() {
  return (
    // <PDFViewer width="1000" height="600" className="app">
    //   {/* <Invoice invoice={invoiceData} /> */}
    // </PDFViewer>
    <PDFDownloadLink
      document={<Invoice invoice={invoiceData} />}
      fileName="FORM"
    >
      <button>Fdd</button>
    </PDFDownloadLink>
  );
}

export default App;
