"use client";

import { Link, Navbar } from '@nextui-org/react';
import { TbNeedleThread } from 'react-icons/tb';
import { BsCart3, BsSearch } from 'react-icons/bs';
import { UrbanitoText } from '../common/UrbanitoText';

const UrabanitoNavBar = () => {
    const collapseItems = [
        "Home",
        "Collections",
        "About",
        "Contact",
        "Log Out",
    ];
    return (
        <Navbar isBordered variant="sticky">
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand css={{ "@xs": { w: "12%" } }}>
                <TbNeedleThread />
                <UrbanitoText b color="inherit">{"Urbanito"}</UrbanitoText>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight activeColor="secondary" hideIn="xs" variant="highlight-rounded">
                <Navbar.Link href="#">Home</Navbar.Link>
                <Navbar.Link isActive={true} href="#">Collections</Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content css={{ "@xs": { w: "12%", jc: "flex-end" } }}>
                <BsSearch />
                <BsCart3 />
            </Navbar.Content>
            <Navbar.Collapse disableAnimation>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem key={item} activeColor="secondary" css={{ color: index === collapseItems.length - 1 ? "$error" : "" }} isActive={index === 2}>
                        <Link color="inherit" css={{ minWidth: "100%" }} href="#">{item}</Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default UrabanitoNavBar;