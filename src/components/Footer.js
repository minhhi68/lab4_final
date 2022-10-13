import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Footer as NavFooter } from 'react-materialize'

import { ThemeContext } from "./ThemeContext"
import './Footer.css'
export default function Footer() {
    const { theme } = useContext(ThemeContext)
    return (
        <NavFooter
            style={{ backgroundColor: theme.primaryBackgroundColor, color: theme.focusedTextColor }}
            copyrights="2022 Code"
            links={
                <ul style={{textAlign: 'left'}}>
                    {/* <li>
                        <Link to="/" className="grey-text text-lighten-3" >What's new</Link>
                    </li>
                    <li>
                        <Link to="/news" className="grey-text text-lighten-3" >Updates</Link>
                    </li>
                    <li>
                        <Link to="/about" className="grey-text text-lighten-3" >Reviews</Link>
                    </li>
                    <li>
                        <Link to="contact" className="grey-text text-lighten-3" >API</Link>
                    </li> */}
                </ul>
            }
        >
            
        </NavFooter>
    );
}