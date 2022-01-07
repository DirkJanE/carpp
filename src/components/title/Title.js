import {StyledTitle, StyledTitleNavbar} from "./style/titlestyle";

export const Title = (props) => {

    if (props.component === "LoginSignup") {
        return (
            <StyledTitle>
                C a R p p
            </StyledTitle>
        )
    } else {
        return (
            <StyledTitleNavbar>
                C a R p p
            </StyledTitleNavbar>
        )
    }
}
