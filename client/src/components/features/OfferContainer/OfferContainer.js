import React, { useEffect, useState } from 'react';
import { Container, Spinner, Col, Row } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../config';
import {
  getProducts,
  getProductsBasic,
  getProductsExtended,
  updateProducts,
} from '../../../redux/productsRedux';
import styles from './OfferContainer.module.scss';
import OfferBox from '../OfferBox/OfferBox'

const OfferContainer = () => {
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState();
  const dispatch = useDispatch();
  useEffect(() => fetchData(), []);

  function fetchData() {
    setLoading(true);
    fetch(API_URL + '/product')
      .then((res) => res.json())
      .then(async (products) => {
        await dispatch(updateProducts(products));
        setLoading(false);
      });
  }
  const allProducts = useSelector(getProducts);
  const productsBasic = useSelector(getProductsBasic);
  const productsExtended = useSelector(getProductsExtended);
  if (isLoading) {
    return (
      <Spinner animation="border" role="status" className="d-block mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else
    return (
      <Row className={styles.root}>
        <Tabs>
          <Col className={'text-center mt-3'}>
            <TabList className={'mt-5 ' + styles.tabList}>
              <Tab className={styles.tab}>All</Tab>
              <Tab className={styles.tab}>Basic</Tab>
              <Tab className={styles.tab}>Extended</Tab>
            </TabList>
          </Col>
          <Container className="mt-5">
            <TabPanel>
              {' '}
              <Row xs={1} md={2} lg={4} className="g-3 ">
                {allProducts.map((product) => (
                  <Col key={product.id}>
                    <OfferBox {...product} />
                  </Col>
                ))}
              </Row>
            </TabPanel>
            <TabPanel>
              {' '}
              <Row xs={1} md={2} lg={4} className="g-3 ">
                {productsBasic.map((product) => (
                  <Col key={product.id}>
                    <OfferBox {...product} />
                  </Col>
                ))}
              </Row>
            </TabPanel>
            <TabPanel>
              {' '}
              <Row xs={1} md={2} lg={4} className="g-3 ">
                {productsExtended.map((product) => (
                  <Col key={product.id}>
                    <OfferBox {...product} />
                  </Col>
                ))}
              </Row>
            </TabPanel>
          </Container>
        </Tabs>
      </Row>
    );
};

export default OfferContainer;