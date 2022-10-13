import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Button, Container, Row, Textarea, TextInput, Icon } from "react-materialize"
import './Contact.css'
function Contact() {
    const { theme } = useContext(ThemeContext)


    const handleSubmit = (e) => {
        e
            .preventDefault()
    }

    return (
        <div style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}>
            <Container id='contact'>
                <h3>Contact us now</h3>
                <form onSubmit={handleSubmit}>
                    <Row>
                        
                        <TextInput icon={<Icon></Icon>} label="Your Name" s={12} />
                    </Row>
                    <Row>
                        <TextInput icon={<Icon></Icon>} label="Your Phone" s={12} />
                    </Row>
                    <Row>
                        <TextInput icon={<Icon></Icon>} label="Your Email" email validate s={12} />
                    </Row>
                    {/* <span class="helper-text" data-error="Wrong email format" data-success="Good to go">Helper text</span> */}
                    <Textarea icon={<Icon></Icon>} label="Give us a nice welcome"></Textarea>
                    <Button className="wave-effects wave-circle">Submit</Button>
                </form>
            </Container>
        </div>
    );
}

export default Contact