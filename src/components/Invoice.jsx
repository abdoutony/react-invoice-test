import { Page, Document, Image, StyleSheet } from "@react-pdf/renderer";
import InvoiceTitle from "./invoice-title";
import InvoiceNo from "./invoice-no";
import InvoiceItemsTable from "./invoice-items-table";
import BillTo from "./bill-to";
import InvoiceThankYouMsg from "./invoice-thankyou-msg";
import logo from "../assets/logo.png";
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: "column",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
const Invoice = ({ invoice }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src={logo} />
      <InvoiceTitle title="Invoice" />
      <InvoiceNo invoice={invoice} />
      <BillTo invoice={invoice} />
      <InvoiceItemsTable invoice={invoice} />
      <InvoiceThankYouMsg />
    </Page>
  </Document>
);
export default Invoice;
