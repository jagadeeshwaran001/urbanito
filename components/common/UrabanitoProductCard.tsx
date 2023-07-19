"use client";

import { Button, Card, Col, Row } from '@nextui-org/react'
import { UrbanitoText } from './UrbanitoText'

const UrabanitoProductCard = () => {
  return (
    <Card css={{ w: "auto", h: "auto", marginLeft: "5px"}}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <UrbanitoText size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          New
        </UrbanitoText>
        <UrbanitoText h3 color="black">
          Acme camera
        </UrbanitoText>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://nextui.org/images/card-example-6.jpeg"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <UrbanitoText color="#000" size={12}>
            Available soon.
          </UrbanitoText>
          <UrbanitoText color="#000" size={12}>
            Get notified.
          </UrbanitoText>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary">
              <UrbanitoText
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Notify Me
              </UrbanitoText>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  )
}

export default UrabanitoProductCard;
