/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import ReactTooltip from 'react-tooltip';
import helpLinks from '../translations/helpLinks';

 interface TooltipHelpProps {
     tipId: string;
 }
 
/**
 * Component that renders a help icon that shows a tooltip on hover
 */
export default function TooltipHelpComponentAlternative(props: TooltipHelpProps) {
    const divStyle = {
        display: 'inline-block'
    };

    // Create links
    const values = helpLinks[props.tipId];
    const links: Record<string, JSX.Element> = {};
    Object.keys(values).forEach(key => {
        const link = values[key];
        links[key] = (<a target="_blank" href={link}>
            {link}
        </a>)
    });
    
    return (
        <div style={divStyle}>
            <i data-for={`${props.tipId}`} data-tip className='fa fa-question-circle' />
            <ReactTooltip id={`${props.tipId}`} event='click' clickable={true}>
                <div style={{ width: '300px' }}>
                    <FormattedMessage
                        id={props.tipId}
                        values={links}
                    />
                </div>
             </ReactTooltip>
         </div>
     );
 }
 