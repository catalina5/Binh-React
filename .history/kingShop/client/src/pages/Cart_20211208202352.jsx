import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import numberWithComas from "../utils/numberWithComas";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const KEY =
  "pk_test_51K4CveHm98pAOGtLpFUa35R7Flf5QjmluWetLAUiDxDYyR8lnLWi5HqYXMW2rrDKwTiDcP0YbWRXN0Kjzc02mHQK00GmmMOKpk";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);
  useEffect(() => {
    const makeRequest = async () => {
      try {
      } catch (err) {
        console.log(err);
      }
    };
  }, [input]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>GI??? H??NG</Title>
        <Top>
          <Link to="/products">
            <TopButton>Ti???p t???c mua h??ng</TopButton>
          </Link>
          <TopTexts>
            <TopText>S??? h??ng trong gi???(2)</TopText>
            <TopText>Dan s??ch y??u th??ch (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Mua ngay</TopButton>
        </Top>
        <Bottom>
          <Info>
            {!cart.products && <div>nothing</div>}
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>T??n s???n ph???m:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>K??ch c???:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {numberWithComas(product.price * product.quantity)} ??
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>H??A ????N THANH TO??N</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>T???ng s??? ti???n:</SummaryItemText>
              <SummaryItemPrice>
                {" "}
                {numberWithComas(cart.total)} ??
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Ph?? giao h??ng:</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Gi???m gi??:</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>S??? ti???n thanh to??n:</SummaryItemText>
              <SummaryItemPrice>
                {numberWithComas(cart.total)} ??
              </SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="King Shop"
              image="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/p240x240/223976073_1507111056297837_3279921896508334407_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=oWVjvNDnzjAAX_A-tHr&_nc_ht=scontent-hkg4-1.xx&oh=2f16b0152cf36e7778cdc2281ffff0de&oe=61B68A30"
              billingAddress
              shippingAddress
              description={`T???ng thanh to??n c???a b???n l?? ${numberWithComas(
                cart.total
              )} ??`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>?????T H??NG</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
