
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaBookmark, FaSearch, FaChevronDown } from "react-icons/fa";
import logo from "../../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function ArabicNavbar() {
  return (
    <Navbar expand="md" className="shadow-sm py-3" style={{ background: "rgba(61, 70, 77, 1)", direction: "rtl" }}>
      <Container fluid className="d-flex align-items-center justify-content-between">

    
        <Navbar.Toggle aria-controls="main-navbar" style={{ borderColor: "#f0ad4e" }} />

        <Navbar.Collapse id="main-navbar">
          <div className="d-flex align-items-center justify-content-between w-100 flex-wrap">

            {/* القوائم */}
            <Nav className="d-flex gap-4 align-items-center">
              <Nav.Link href="#" className="text-white fw-bold" style={{ borderLeft: "4px solid rgba(233, 146, 57, 1)" }}>الرئيسية</Nav.Link>
              <Nav.Link href="#" className="text-white fw-bold" style={{ borderLeft: "4px solid rgba(233, 146, 57, 1)" }}>جميع الكتب</Nav.Link>
              <Nav.Link href="#" className="text-white fw-bold" style={{ borderLeft: "4px solid rgba(233, 146, 57, 1)" }}>المنتجات الجديدة</Nav.Link>
              <Nav.Link href="#" className="text-white fw-bold" style={{ borderLeft: "4px solid rgba(233, 146, 57, 1)" }}>المذكرات</Nav.Link>
              <Nav.Link href="#" className="text-white fw-bold" style={{ borderLeft: "4px solid rgba(233, 146, 57, 1)" }}>المراجعات</Nav.Link>
            </Nav>

            {/* البحث */}
            <Form className="d-flex mx-3 my-3 my-md-0" style={{ maxWidth: "333px", flex: "1 1 333px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#fff",
                width: "100%"
              }}>
                <FormControl
                  type="search"
                  placeholder="بحث باسم الكتاب، المؤلف، العنوان"
                  className="input"
                  style={{
                    border: "none",
                    flex: 1,
                    padding: "8px 10px",
                    outline: "none",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "#f0ad4e",
                    padding: "8px 10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    width: "45px",
                    height: "44px"
                  }}
                >
                  <FaSearch color="rgba(246, 246, 246, 1)" />
                </div>
              </div>
            </Form>

            {/* الأيقونات */}
            <div className="icons d-flex align-items-center gap-4 justify-content-center flex-shrink-0">
              <div style={{ position: "relative" }}>
                <FaShoppingCart size={30} color="rgba(245, 245, 245, 1)" style={{ cursor: "pointer" }} />
                <span
                  style={{
                    position: "absolute",
                    top: "-6px",
                    right: "-8px",
                    backgroundColor: "#f0ad4e",
                    color: "#fff",
                    borderRadius: "50%",
                    fontSize: "10px",
                    width: "18px",
                    height: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                  }}
                >
                  0
                </span>
              </div>

              <FaBookmark size={22} color="rgba(245, 245, 245, 1)" style={{ cursor: "pointer" }} />

              <FaUser size={28} color="rgba(245, 245, 245, 1)" style={{ cursor: "pointer" }} />
              <div className="language-switch d-flex align-items-center justify-content-center gap-1 px-2"
                style={{
                  cursor: "pointer",
                  border: "1px solid rgba(245, 245, 245, 1)",
                  borderRadius: "5px",
                  height: "28px",
                  backgroundColor: "transparent"
                }}>
                <span style={{ color: "rgba(245, 245, 245, 1)", fontSize: "16px", fontWeight: "500" }}>EN</span>
                <FaChevronDown size={14} style={{ color: "rgba(245,245,245,1)" }} />
              </div>
            </div>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "129px", height: "128px", objectFit: "contain" }}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ArabicNavbar;

