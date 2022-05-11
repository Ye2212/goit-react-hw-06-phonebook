import propTypes from "prop-types";
import { Section } from "./Section.styled";

function SectionComponent({ children }) {
    return (
        <Section>{children}</Section>
    )
}

Section.propTypes = {
    children: propTypes.node,
}
export default SectionComponent;