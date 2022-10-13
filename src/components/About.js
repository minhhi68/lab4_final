import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Icon, Container, Section, Collapsible, CollapsibleItem, Slider, Slide, Caption } from 'react-materialize'

import './About.css'
export default function About() {
    const { theme } = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}>
            <Container id='about' >
                <Section
                // style={{ backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }}
                >
                  
                    <Collapsible accordion={false} popout>
                        <CollapsibleItem
                            expanded={true}
                            header="Who are we"
                            icon={<Icon></Icon>}
                        >
                           Create the best movies experiences
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header="How often do we update the film's info"
                            icon={<Icon></Icon>}
                        >
                            We update all movies regularly
                         
                        </CollapsibleItem>
                        <CollapsibleItem
                            expanded={false}
                            header="Anthing else?"
                            icon={<Icon></Icon>}
                        >
                            To contact us, check the Contact page
                        </CollapsibleItem>
                    </Collapsible>
                </Section>
            </Container>
        </div>
    )
}
