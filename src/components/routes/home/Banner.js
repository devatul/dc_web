import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <svg className="banner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 319.5">
                <title>Banner</title>
                <path className="a" d="M197.25,275.15c-17.09-5-60.19,51.61-69.62,50.63-21.5-2.26-39.24-18.47-59.25,2.87C59.82,337.77,37.27,346.7,25,350H475c-15-.3-60.44-45.67-91.67-44.08C353,307.47,336.51,251.43,315,261.45,261.18,286.46,225.73,283.49,197.25,275.15Z" transform="translate(-25 -30.5)" />
                <path className="b" d="M232.47,269.19c-14.33,0-24.48,23.83-37.63,31-14.83,8.07-34.72-9.86-43.61-10.85-20.3-2.25-33.44,54.34-72.63,39.34C67.21,324.29,49.24,346.7,37.66,350H462.34c-14.15-.3-19.95-8.09-27-11.69-15.93-8.1-33.75-25.64-42.76-24.45-11.48,1.53-25.89,6.08-30.67,6-10-.13-50.56-35.2-72.06-28.06C257.57,302.54,249,269.19,232.47,269.19Z" transform="translate(-25 -30.5)" />
                <path className="c" d="M246.62,336.89c-14.33,0-24-13.5-37.13-6.35-14.83,8.07-35.83-18.87-44.73-19.85-20.29-2.26-35.44,38.12-80.17,28.59-12-2.56-35.35,7.42-46.93,10.72H462.34c-14.15-.3-44.41-16.28-53.69-13.11-17,5.83-33.76-8.73-49.79-1.58-10.48,4.67-22.22-14.24-27-14.3-10-.13-20.17-13.91-32.07-15.88C285.44,302.75,263.14,336.89,246.62,336.89Z" transform="translate(-25 -30.5)" />
                {/* <rect className="a" x="278.75" y="254" width="39" height="48.25" />
                <rect className="d" x="280.33" y="255.5" width="2" height="45" />
                <path className="d" d="M349.21,312.94v-.4h-1.58V285h.7v-7h-6.8v.5H323.3V273h-.6v5.5h-.2V278h-.2v-3h-.6v3h-.2v.5H311.33v.4h.3V283h-.13v-1h-.75v-2.69h-.5V282h-.5v-3.69a1.31,1.31,0,0,0-1.31-1.31h-.13a1.31,1.31,0,0,0-1.31,1.31v.48h.5v-.48a.81.81,0,0,1,.81-.81h.13a.81.81,0,0,1,.81.81V282H309v-1h-1v1h-.5v1h-4.17v1h-1v1h1v48h-2v2h2v5h-1.12v.4h.3V344h-.15v1H301v4h12v-5h-1.07l.77-1.29,1.47-1.23,7.16,6V349h4v-1.78l6.84-5.74,7.16,6V349h4V335h2v-2h-2V317.6h5.88v-1h-.3v-3.66ZM316,335.3l-1.85,3.09L311,336.54,312,335h3.51Zm-7.46,5.1V344h-1.18v-3.6Zm.4,3.6v-3.65l2.92,1.79L309.61,344Zm.07-4,1.14-1.89,2.79,2.35-.84,1.39Zm1.66-2.76.19-.32,3.09,1.85-.49.82Zm-.32-.26L308,335h3.49Zm-.52.87L308.5,340h-1.17v-4.25Zm5.18,1.09,2.34-3.91h3l-6.05,5.08ZM313.76,332l1.18-2,3.09,1.85L318,332Zm1.39-2.32,1.85-3.09,3.09,1.85-1.85,3.09Zm2.06-3.43,1.85-3.09,3.08,1.85-1.85,3.09Zm2.05-3.43,1.85-3.09,3.09,1.85-1.85,3.09Zm2.06-3.43,1.85-3.09,3.09,1.85-1.85,3.09Zm2.05-3.43,1.81-3h2.33v3.66h-.32l-.73,1.21Zm4.54.64v-3.66h1.42v3.66Zm5.42-3.66h.18v3.66h-.18Zm.58,0h1.42v3.66h-1.42Zm7.42,0h1v3.66h-1ZM329.63,283h-.1v-3.1h.1Zm-11.3,0H318v-.5h.3Zm10-.5h.8v.5h-.8Zm.8-1h-.8V281H327v-1.1h2.1Zm-2.5-.5h-.1v-1.1h.1Zm-.5,0h-.3v-1h-.5v-.1h.8Zm-4.8-1H321v-.1h.3Zm-.7,1h-.1v-1.1h.1Zm-.5,0h-1.8v.5H318v-1.6h2.1Zm-2.5.5h-.1v-1.6h.1Zm-.1,1h.1v.5h-.1Zm24.6-2.5h1.5v3h-1.5Zm4.5,3H344v-3h2.6Zm0,26.1h-3v-4.6h3Zm-3,3.84h1.88v1.16h-1.88Zm3-8.84h-3v-4.6h3Zm0-5h-3v-4.6h3Zm0-5h-3v-4.6h3Zm-3,20.4h1.88v2.1h-1.88Zm2.28,0h.72v2.1h-.72Zm.72-.4h-.72v-1.16h.72Zm-3-1.56v-3h3v3Zm3-23.44h-3V285h3Zm1.1-6.1H347v-1h.7Zm0-1.4H347V280h.7Zm0-3.2v1.2H347v-1.2Zm-1.1,0v1.2h-4.5v-1.2Zm-5.1.5V283H339v-4.1Zm-2.9,0V283H336v-4.1Zm-3,0V283H333v-4.1Zm-3,0V283H330v-4.1Zm-3,0v.6H327v-.6Zm-3,0v.6h-1.3V279H324v-.1Zm-3.3,0h.3v.1h-.33v-.1Zm-.63,0v.1h-.2v-.1Zm-1.2,0v.1h-.17v.5H321v-.6Zm-.87,0v.6H318v-.6Zm-3,0v.6h-.8v.4h.3V283H315v-4.1Zm-5.6,0h2.6V283H312Zm30.3,6.1v27.54h-1V286h-6v26.54h-2V286h-4v26.54H325L313.29,332h-9V285Zm-39,55.4V344h-.42v-3.6Zm11.61.43,6.39-5.36v10.72Zm10.39,5.08V335.75l6.06,5.08ZM326,335h12.33l-6.16,5.18Zm6.94,5.83,6.39-5.36v10.72Zm9.39-8.83H319.12l8.63-14.4h1.58V331h4V317.6h2V331h6V317.6h1Zm6.18-15.4h-.88v-3.66h.88Z" transform="translate(-25 -30.5)" />
                <rect className="a" x="159.23" y="264.66" width="32" height="40" />
                <path className="e" d="M221.59,319.24v-.33h-1.31V296.18h.59V290.4h-5.61v.41h-15v-4.54h-.5v4.54h-.16v-.41h-.17v-2.48h-.49v2.48h-.17v.41h-8.39v.33h.25v3.39h-.11v-.83h-.62v-2.22h-.41v2.22H189v-3.05a1.08,1.08,0,0,0-1.08-1.08h-.11a1.09,1.09,0,0,0-1.08,1.08v.41h.42v-.41a.66.66,0,0,1,.66-.66h.11a.67.67,0,0,1,.67.66v3.05h-.21v-.82h-.82v.82h-.41v.83h-3.44v.82h-.83v.83h.83v39.61h-1.65v1.66h1.65v4.12h-.93v.33h.25v3h-.12v.83H178.5V349h13.21v-4.13h-.89l.64-1.06,1.21-1,5.91,5V349h3.3v-1.47l5.64-4.73,5.92,5V349h3.3V337.45h1.65v-1.66h-1.65V323.08h4.85v-.82h-.25v-3Zm-22.17,9.68-2.55-1.53,1.53-2.55,2.55,1.53Zm-5.26,8.78-1.53,2.55-2.54-1.53.76-1.27h2.89ZM188,341.9v3h-1v-3Zm.33,3v-3l2.41,1.47-1.83,1.54Zm.06-3.32.93-1.56,2.31,1.93-.69,1.16Zm1.36-2.28.17-.27,2.54,1.53-.4.68Zm.05-.72h0l-.09.14-.21.37-1.92-1.61h2.88Zm-.73,1.22-1,1.61-.12.19h-1v-3.51Zm6.2-2.32h2.49l-5,4.19ZM192.33,335l1-1.63,2.55,1.52-.06.11Zm1.15-1.92,1.53-2.54,2.55,1.52L196,334.58Zm1.7-2.83,1.52-2.55,2.55,1.53-1.52,2.55Zm3.39-5.66L200.1,322l2.55,1.53-1.53,2.55Zm1.7-2.83,1.49-2.49h1.92v3h-.27l-.59,1Zm3.74.53v-3h1.18v3Zm4.48-3h.14v3h-.14Zm.47,0h1.18v3H209Zm6.13,0h.83v3h-.83Zm-9.66-24.71h-.08V292h.08Zm-9.32,0h-.25v-.42h.25Zm8.25-.42H205v.42h-.66Zm.66-.82h-.66v-.41h-1.07V292H205Zm-2.06-.41h-.08V292H203Zm-.42,0h-.24v-.83h-.42V292h.66Zm-4-.83h-.24V292h.24Zm-.57.83h-.09V292H198Zm-.42,0h-1.48v.41h-.25V292h1.73Zm-2.06.41h-.08V292h.08Zm-.08.82h.08v.42h-.08Zm20.3-2.06H217v2.48h-1.24Zm3.71,2.48h-2.14v-2.48h2.14Zm0,21.54H217v-3.79h2.48ZM217,319.24h1.56v1H217Zm2.48-7.29H217v-3.8h2.48Zm0-4.13H217V304h2.48Zm0-4.13H217v-3.8h2.48ZM217,320.53h1.56v1.73H217Zm1.89,0h.59v1.73h-.59Zm.59-.33h-.59v-1h.59Zm-.59-1.29H217V316.4h2.48v2.51Zm.59-19.35H217v-3.38h2.48Zm.91-5h-.57v-.83h.57Zm0-1.16h-.57v-1.32h.57Zm0-2.64v1h-.57v-1Zm-.91,0v1h-3.71v-1Zm-4.2.41v3.39h-2.07v-3.39Zm-2.4,0v3.39h-2.14v-3.39Zm-4.37,0h1.9v3.39h-2.15v-3.39Zm-.83,0h.25v3.39h-2.15v-3.39Zm-2.23,0v.5h-2.14v-.5Zm-2.47,0v.5h-1.08v-.42h-1.07v-.08Zm-2.73,0h.25v.08h-.27v-.08Zm-.52,0v.08h-.16v-.08Zm-1,0v.08h-.14v.42h-.24v-.5Zm-.71,0v.5h-2.15v-.5Zm-2.48,0v.5h-.66V292h.25v2.56h-1.74v-3.39Zm-4.62,0h2.14v3.39h-2.14Zm25,5v22.73h-.83V297h-5v21.91h-1.65V297h-3.3v21.91h-3.62L200,321.56h0l-.17.28h0l-3.35,5.59,0,.07h0l-1.53,2.55h0l-.07.13L192,335h-7.4V296.18ZM183.73,341.9v3h-.35v-3Zm9.58.36,5.27-4.43v8.85Zm8.57,4.19v-8.39l5,4.2Zm.55-9h10.19l-5.1,4.27Zm5.74,4.81,5.27-4.43v8.85Zm7.75-7.29H196.76l1.63-2.72,0-.08h0l1.53-2.54h0l.07-.12,1.74-2.9.06-.1h0l1.52-2.55h0l.17-.28h0l.36-.6h1.31v11.06h3.3V323.08h1.65v11.06h5V323.08h.83ZM221,322.26h-.73v-3H221Z" transform="translate(-25 -30.5)" />
                <rect className="e" x="160.38" y="266.5" width="1.65" height="37.14" />
                <rect className="a" x="90.82" y="253.75" width="38.83" height="48.42" />
                <path className="d" d="M159.64,278h-6.2v.5H135.21V273h-.6v5.5h-.2V278h-.2v-3h-.6v3h-.2v.5H123.24v.4h.3V283h-.13v-1h-.75v-2.69h-.5V282h-.5v-3.69a1.31,1.31,0,0,0-1.31-1.31h-.14a1.31,1.31,0,0,0-1.3,1.31v.48h.5v-.48a.8.8,0,0,1,.8-.81h.14a.81.81,0,0,1,.81.81V282h-.25v-1h-1v1h-.5v1h-4.17v1h-1v1h1v48h-2v2h2v14h4v-1.78l6.83-5.74,7.17,6V349h4v-1.78l6.83-5.74,7.17,6V349h4V335h2v-2h-2V317.3h.29v-2.8h3v2.8h1V285h.71v-7Zm-9.4,57-6.17,5.18L137.9,335Zm-18,0-6.17,5.18L119.9,335Zm-13,10.91V335.75l6.05,5.08Zm7.61-5.08,6.39-5.36v10.72Zm10.39,5.08V335.75l6,5.08Zm7.61-5.08,6.39-5.36v10.72Zm6.09-61.93h2.5V283h-2.5Zm-3,0h2.6V283h-2.6Zm-3,0h2.6V283h-2.6Zm-3,0h2.6V283h-2.6Zm-3,0h2.6v.6h-2.6Zm2.6,1V283h-.1v-3.1Zm-2.6,0H141v1.6h-.8V281h-1.3Zm2.1,2.6v.5h-.8v-.5Zm-5.1-3.6h2.6v.6h-1.3V279h-1.3Zm2.6,1V281h-.1v-1.1Zm-1.3.1v-.1h.8V281h-.3v-1Zm-2-1.1h.33v.1h-.33Zm-.8,0h.2v.1h-.2Zm-1.47,0h.47v.1h-.17v.5h-.3Zm0,1h.3v.1h-.3Zm-3-1h2.6v.6h-2.6Zm2.6,1V281h-.1v-1.1Zm-2.6,0H132V281h-1.8v.5h-.3Zm0,2.6h.3v.5h-.3Zm-3-3.6h2.6v.6h-.8v.4h.3V283h-2.1Zm2.5,2.6v-1.6h.1v1.6Zm.1,1v.5h-.1v-.5Zm-5.6-3.6h2.6V283h-2.6Zm-7.7,6.1h38v47h-38Zm39-2H154v-3h1.5v3Zm3.29,31.1h-3v-4.6h3Zm0-5h-3v-4.6h3Zm0-5h-3v-4.6h3Zm0-5h-3v-4.6h3Zm0-5h-3v-4.6h3Zm0-5h-3V285h3Zm0-6.1h-2.6v-3h2.6Zm0-3.4H154v-1.2h4.5Zm1.1,3.4h-.7v-1h.7Zm0-1.4h-.7V280h.7Zm0-2h-.7v-1.2h.7Z" transform="translate(-25 -30.5)" />
                <rect className="d" x="122.24" y="255.5" width="6" height="45" />
                <rect className="d" x="116.24" y="255.5" width="4" height="45" />
                <rect className="d" x="92.24" y="255.5" width="2" height="45" />
                <path className="f" d="M161.11,312.94v-.4H136.86l-1.92,3.21h0l-.21.34h0l-1.85,3.09h0l-.21.34h0l-2,3.35,0,.09h0L128.77,326h0l-.07.12-6.1,10.18h0l-.09.15-2,3.28-.14.23h-6.29v.4h.3V344h-.14v1h-5.36v4h16v-5h-1.07l.89-1.48.1-.18h0l2-3.26.1-.17h0l1.85-3.09h0l.14-.24,1.91-3.19h0l2.12-3.55.14-.22h0l1.85-3.09h0l.2-.35h0l1.85-3.09h0l.21-.34h0l1.85-3.09h0l.21-.34h0l.44-.72h21.45v-1h-.3v-3.66Zm-3.7,0v3.66h-2.6v-3.66Zm-3,0v3.66h-2.6v-3.66Zm-3,0v3.66h-2.6v-3.66Zm-3,0v3.66h-2.6v-3.66Zm-3,0v3.66h-2.6v-3.66Zm-3.62,0h.62v3.66h-2.6v-3.66Zm-12.88,13.65,3.08,1.85-1.85,3.09-3.08-1.85ZM120.81,344v-3.65l3,1.81-1.1,1.84Zm-.4-3.6V344h-2.6v-3.6Zm-3,0V344h-2.6v-3.6Zm3.48-.43,1.85-3.08,3.09,1.85L124,341.82Zm5.14-1.58-3.09-1.85,1.85-3.08,3.09,1.84Zm2.06-3.43L125,333.11l1.85-3.09,3.09,1.85Zm4.11-6.86-3.09-1.85,1.85-3.09,3.09,1.85Zm2.06-3.43-3.09-1.85,1.85-3.09,3.09,1.85Zm2.05-3.43-3.09-1.85,1.85-3.09,3.09,1.85Zm-1-5.28,1.8-3h2.33v3.66h-.32l-.72,1.21Zm25.13.64h-2.6v-3.66h2.6Z" transform="translate(-25 -30.5)" />
                <path className="d" d="M220.14,347.59v-2.11h-.71v-2.11H218v1.4h-.7v-2.11H214.5v2.11h-.7v.71h-2.46V334.21a17.34,17.34,0,0,0-9.83-15.57l-.3.63.84.44-1.23,2.13A16.35,16.35,0,0,0,199,321v-.9h-.7v-.71h1.05v-.7h-.7v-2h1.06V316h-3.88v-2.81h-.14v-2.12h-.42v2.12h-.14V316h-1v-.7h.14v-.71h-.14v-1.4h-.42v1.4h-.14v.71h.14v.7h-1.58V313.4a1.18,1.18,0,0,0-1.17-1.17h-.13a1.18,1.18,0,0,0-1.17,1.17v.46H190v-.46a.82.82,0,0,1,.82-.82H191a.82.82,0,0,1,.81.82V316h-3.34v.71h1.06v2h-.71v.7h1.06v.71h-.71v.9A14.06,14.06,0,0,0,182.33,342h-.92v.7h1.41v3.52h-.71V349H192v-.88a14.65,14.65,0,0,0,2.11.18,14.91,14.91,0,0,0,2.12-.18V349h24.64v-1.41ZM198,316.73V318h-2.12v-1.29Zm-2.82,0V318h-.85v-1.29Zm-1.55,0V318h-.92v-.81h-.52v-.48Zm-1.8,0v.48h-.52V318h-1.06v-1.29Zm18.84,28.75h-.35v1.41h-2.11v-3.52h2.46Zm0-2.82h-2.46v-3.52h2.46Zm0-4.22h-2.46v-3.52h2.46Zm-2.46-4.23v-.35h0a14.09,14.09,0,0,0-.73-4.13l2.31-.84a16.41,16.41,0,0,1,.9,5.32Zm-3.08-8.77,1.88-1.58a16.69,16.69,0,0,1,2.52,4.37l-2.31.84A14.07,14.07,0,0,0,205.09,325.44Zm-2.43-5.37a17,17,0,0,1,3.86,3.25l-1.89,1.58a14,14,0,0,0-3.21-2.69Zm2.69,26.11v-3.52h1.41V342h-.92a14.15,14.15,0,0,0,1.62-3.37v9h-1.41v-1.41Z" transform="translate(-25 -30.5)" />
                <path className="a" d="M194.08,347.3a13.09,13.09,0,1,1,13.09-13.09A13.1,13.1,0,0,1,194.08,347.3Z" transform="translate(-25 -30.5)" />
                <rect className="f" y="318.5" width="450" height="1" />
                <path className="d" d="M78.19,307.16c.39-.22.79-.43,1.19-.63l-.43-.9a24.64,24.64,0,0,0-14,22.12V349h1v-8.25h3.5V349h1V327.25h-1v.5H66a23.17,23.17,0,0,1,1.28-7.56l4.09,1.49c.11-.31.22-.63.35-.93l-4.1-1.5a23.56,23.56,0,0,1,3.59-6.2l3.33,2.8c.21-.26.43-.51.65-.76l-3.35-2.81a23.52,23.52,0,0,1,5.49-4.62l2.19,3.8c.28-.17.56-.36.85-.52ZM69.5,339.75H66v-5h3.5Zm0-11v5H66v-5Z" transform="translate(-25 -30.5)" />
                <path className="d" d="M95.75,298.84v-.64a1.67,1.67,0,0,0-1.66-1.67h-.18a1.67,1.67,0,0,0-1.66,1.67v5.4H91.5v2.15H90v-4.83h.2v-1H90v-2h-.6v2h-.2v1h.2v4.83H88v-7.83h-.2v-3h-.6v3H87v7.83H83.5v2h12v-2h-2V303.6h-.75v-5.4A1.16,1.16,0,0,1,93.91,297h.18a1.16,1.16,0,0,1,1.16,1.17v.64Z" transform="translate(-25 -30.5)" />
                <path className="f" d="M97.5,302.92v-1h-16v1H83v2.83H82v1H97v-1H96v-2.83Zm-13.5,0h5.2v2.83H84Zm11,2.83H90.2v-2.83H95Z" transform="translate(-25 -30.5)" />
                <path className="f" d="M109.5,327.75A20,20,0,0,0,96.5,309v-1.28h-14V309a20,20,0,0,0-9.7,29.72H71.5v1h2V345h-1v1.75H70v-1H66.5v-2h-5v-1h-1v-3h-4v3h-1v-2h-2v3h-1v3h-1V349h35v-1.5a18.13,18.13,0,0,0,6,0V349h14v-4h-1v-5.25h2v-1h-1.3A19.92,19.92,0,0,0,109.5,327.75Z" transform="translate(-25 -30.5)" />
                <path className="a" d="M89.5,308.75A19,19,0,0,0,81.58,345H86.5v1.49a17.44,17.44,0,0,0,6,0V345h4.92a19,19,0,0,0-7.92-36.25Z" transform="translate(-25 -30.5)" />
                <rect className="d" x="230" y="108.5" width="3" height="12" />
                <rect className="g" x="229.5" y="97.5" width="4" height="14" />
                <rect className="d" x="228.5" y="88.5" width="6" height="10" />
                <rect className="d" x="229" y="99.5" width="5" height="2" />
                <rect className="d" x="228.5" y="104.5" width="6" height="2" />
                <rect className="d" x="227.5" y="106.5" width="8" height="2" />
                <rect className="g" x="227.5" y="89.5" width="8" height="3" />
                <rect className="f" x="231.8" y="38.5" width="0.4" height="50" />
                <rect className="f" x="230.8" y="38.5" width="0.4" height="50" />
                <rect className="f" x="230" y="87.5" width="3" height="1" />
                <rect className="d" x="222.5" y="121.83" width="4" height="176.67" />
                <rect className="h" x="223.5" y="121.83" width="1" height="176.67" />
                <rect className="i" x="212" y="94.5" width="3" height="4" />
                <polygon className="f" points="216 111.5 216 110.5 215 110.5 215 108.5 214.5 108.5 214.5 105.5 215 105.5 215 104.5 214 104.5 214 100.5 214.5 100.5 214.5 99.5 215.5 99.5 215.5 98.5 214.5 98.5 212.5 98.5 211.5 98.5 211.5 99.5 212.5 99.5 212.5 100.5 213 100.5 213 104.5 212 104.5 212 105.5 212.5 105.5 212.5 108.5 212 108.5 212 110.5 211 110.5 211 111.5 212 111.5 212 112.5 211.5 112.5 211.5 114.5 215.5 114.5 215.5 112.5 215 112.5 215 111.5 216 111.5" />
                <polygon className="d" points="219.5 20.5 219.5 21.5 219.7 21.5 219.7 35.5 220.3 35.5 220.3 21.5 220.5 21.5 220.5 20.5 219.5 20.5" />
                <rect className="h" x="219.8" y="17.5" width="0.4" height="3" />
                <rect className="f" x="219" y="21.5" width="2" height="1" />
                <rect className="h" x="243.7" y="25.5" width="0.6" height="6" />
                <rect className="d" x="243.5" y="25.5" width="1" height="1" />
                <rect className="i" x="243.2" y="23.5" width="1.6" height="2" />
                <rect className="d" x="243.5" y="31.5" width="1" height="4" />
                <path className="f" d="M282.5,295h-2.26l-9.42-145.68.23-.21-.26-.28-.2-3.13h3.33V148h1V128.25h1.58v-1h-.3v-3.6h.3v-.4h-7.36L265.83,72h5.67V60H264l-.67-3h-3.08l-1.72-5.16V48.5h-1v-8H257v-10h-1v10h-.5v8h-1v3.33L252.78,57H249.7L249,60H241.5V71h-2V91.25H238v.4h.3v3.6H238v1h7.61l-4.76,73.53-.31.28h0v0h0V171h-9.3v.4h.3V176h1.08v19h1v-2.3h5V195h.64l-2.39,37H235.5V208h-8.37v1h1.37v23H227v.4h.3V236H227v1h-1v1h2.13v34H225v.4h.3V276H225v1h2.13v1h2.61l3.91,3.25-1,15.75H231.5v4h13v-4h-3v-.92h2v-1h-1.79l5.47-2.56L252.5,297V330h1V297.79l2,1.66V330h2V301.12l.21.17,1-1.17-1.19-1v-9.47l14.84,6.22.16,3.17,2-.1-.12-2.22.12,0V299h4v.06l1-.06h3ZM267,61h3.5v5H267ZM255.26,287.63l-1.76-.73V280h2v7.52ZM229.13,238.2h5v4.6h-5Zm15.32-81.51v.18l-.69-1,.67-10.36,6.75-8.54h10.5l2.63,3.44.39,7.69-.26.24h0l-2.66,2.42h0l-.3.27h0l-2.73,2.47-.23.22h0l-1.75,1.58H255.5v1.15l-2,1.81v-3h-1v3.87l-3.89,3.54-1.72-2.42.16-3.51Zm-3.95-65h.8v.65h-.8Zm1.2,0h2.6v.65h-2.6Zm3,0h.8v.65h-.8Zm-4.2-18h5v4.6h-5Zm0,5h5v4.6h-5Zm0,5h5v4.6h-5Zm6-11.7h.67l-.67,10.43Zm-3.79,100.05.72.79-.82.74Zm4.22-7.25,2.42,2.66-2.66,2.42-.22-.24.21-4.61Zm10.22-35.37,5.72-7.25.53.88.67,12.94h-1.9Zm3.76,6.57h-9l4.55-5.76Zm-7.44-75,2,1.21L252,64.27V61ZM261,61v3.27l-3.51-2.06,2-1.21Zm5.92,59,.18,2.73h-.3V123l-1.36.81-.21-4.07,1.11-.66Zm1.81,28,.12,1.76-1.43,1.3-.6-.66-.19-3.49,1-.94.26.28V148Zm2.58,128H257.5V257.58l13.53,13Zm1.83-3.37,3.49,3.37h-3.32Zm-27.63-81.87,7-9.84V196h-7.22ZM242.67,196h-.87l.93-1.32Zm10.83-16.49,2-2.81V196h-2Zm-1-11.29-1-1.38,1-.88Zm1-3.17,2-1.82v9.22l-2-2.82Zm0-1.35v-3.57l1.78,2Zm2,10.47v.8l-2,2.82v-6.43Zm0,22.83v15.89l-2-2.34V197Zm0,17.43v.84l-2,2.34v-5.52Zm0,2.38V236h-2V219.15Zm-13.6,53.86,10.6-10.2V276H241.66ZM239.06,276h-2.69l2.81-2.71Zm4.32-38h9.12v13.38l-9.32-9Zm-2.69,2-2.09-2h2.18Zm11.81,12.75v6.32L242,269.22l1.15-25.48Zm3,3.43-2,1.93v-4.39l2,1.92Zm-2,3.31,2-1.92V276h-2Zm0-7.16V238h2v16.27Zm-12.87-11-1.38,30.51-3.19,3.07,2.31-35.75Zm16.87,14.86v-.54L269.65,244l1.3,25.2Zm0-1.92V238h11.84l.24,4.63ZM271.35,238h3l-2.91,2.8Zm-.11-2-.17-3.36,2.87,3.36Zm-2,0H257.5V216.77l11.44,13.38ZM257.5,215.23v-.76l10-11.72,1.33,25.76Zm0-2.3V197h9.72l.22,4.3ZM269.23,197h1.89l-1.79,2.09Zm-.06-1-.14-2.76,2,2.76Zm-2,0H257.5V177l9.37,13.2Zm-9.67-20.73v-1.39l7.95-11.2,1.32,25.65Zm0-3.12V161.42l1.59-1.45.12-.1h0l2.66-2.42h0l.3-.27h0l2.86-2.6.33,6.49Zm0-12.08v-1.49l.74.82Zm9.62-8.74-.24.22,0-.52Zm.8-16V136h-1.85l-.48-9.28.91,1.52h1Zm-10.83-24.77,2.2-1.32,2.63,2.62-3,1.79Zm-1.7-2.84,1.19-1.19L259,109l-2.12,1.27Zm.67-5.87,1.42,2.37-.9.9-2.24-2.24Zm-2,.74L251.42,100,254,98.44l1.85,3.09Zm5.92,5.78-.09,0-2.59-2.6.11-.11.72-.43Zm2.24,3.79.07.07.61,1,.14,2.61-.2.12h-2.5l-1.19-2Zm-1,4.82-.17.1-.06-.1Zm.78,0h1.14l.17,3.1-.26.33-1.79-3Zm3.54,7.59,0-.37,1.34-.81v3.38Zm-.28-5.35h0l.72-.91.21.36Zm-.07-1.52,0-.72h0l.24.41Zm.47-.72h.09l-.05.07Zm-.56-1-.06-1,1,1Zm-3.7-6.11-3-4.94-.08-.12,3.95-4,.54,10.47ZM257.77,104l-1.36-2.29h0l-.11-.17-2-3.26h0l-.21-.34h0l-.53-.89h8.44l.13,2.54Zm6.28-7h.67l-.63.64ZM264,96,264,95l.9,1Zm-2,0h-9l-.72-1.2h0l-.2-.34h0L251,92.69l5.44-6.16,5.35,6Zm-14.09-4.35h2l.27.45-2.51,2.84v-.07Zm.44,4.35-.1-.17,2.5-2.83,1,1.66L249.51,96Zm3.6-1,.6,1h-2.26Zm5.19-9.23,4.09-4.63.51,9.83Zm-.67-.76-7.09-8H261l.14,2.73Zm4.3-12.78-4.12,1.18L251.7,72h9.06ZM261,76h-9.69l5.38-1.54,4.3,1.23Zm-2.5-2.06,2.36-.68.07,1.38Zm-3.63,0-5.89,1.69.22-3.32ZM263,77h.55l-.52.59Zm-.09-1.78-.13-2.53,1.05-.3.2,3.15ZM257,63.08l4,2.35V66h-4Zm0-1.75V61h.56Zm-1,0-.56-.33H256Zm0,1.75V66h-4v-.57Zm-7.2,14.78,7,7.92-5.31,6-.33-.54h-2.23ZM249,97h4.19l.66,1.09-2.67,1.6-1.42-1.42Zm4.22,6.14-.4.24-1-1.59Zm.29.29,2.41,2.41-.83.84-.22.13L253,103.72Zm2.76,7.64v0h0l1.9,3.17.15.26h0l.88,1.47h-12l7.53-7.53Zm3.55,5.93.36.62h0l.12.19,1.94,3.24h0l.13.21h0l-5.8,7.34L247.66,117Zm4.35,20,.09,1.67L262.93,137Zm2,0h1.8v6.53l-1.57-2Zm1.8,8.18v.48l-.23-.25-.3.27h0l-.78.71-.16-3.14Zm-3.2,3.51.24,4.6-.5.46L262,151.08l2.66-2.42Zm-.56,5.33-2.66,2.42-2.42-2.67,2.66-2.42Zm-3,2.69-2.67,2.42-1-1.14v-2.66h-.14l1.42-1.29Zm-5.7,5-2-2.2v-.69l2-1.82Zm-3,2.65-2.31-2.54,2.31-2.1Zm-2.61-2.27,2.43,2.66L250.94,166l-2.1-3Zm.3,4.59-.54.49-2.42-2.66.87-.79Zm-3.13,4.19h0l.23-.21L250,168.2h0l.29-.27h0l.46-.41L252.5,170v9.25l-6.9,9.72.78-17.41ZM242.52,175l1.15-1.05-.85,18.87-1.6,2.25Zm.11,22,0,.79-.67-.79Zm2.6,0h7.27v12.38l-7.43-8.69Zm7.27,13.92v7.86L243.79,229,245,202.15Zm0,9.4V236h-9l.24-5.4ZM240.87,236H239.1l1.87-2.19Zm-5.74,22.37V238h1.31ZM230.7,236v-2.8h2.6V236Zm3.43,36h-5v-3.8h5Zm-2.83.4v.4h-2.17v-.4Zm.4,0h2.43v.4H231.7Zm2.43.8v.63L234,276H231.7v-2.8Zm1.73,4.8H239l-.05,1h-3.13Zm3,2,0,.75-1.8-.75Zm2.6,0h11v6.48l-11.1-4.66Zm.05-1,0-1H252.5v1Zm12-1h2v1h-2Zm4,0h13.91l0,1h-14Zm15.56-6.83-1.5-29.05,3.07-3,2.31,35.75ZM271,231l-1.58-30.47,2.53-3L274.36,235Zm-2.06-39.64-1.62-31.32,2-2.84,2.47,38.2Zm.3-35.74-2,2.81-.29-5.6,2-1.8Zm.71-19.93h4v4.6h-3.68Zm0-.4-.3-4.6h4.3v4.6Zm-2.72-8.05v-3l.19,3Zm-.54-8.47-.18-.31h0l-.29-.48.56-.71.12,1.84Zm-1.76-5.32L264.16,99l1.32-1.33,1.13,17.52Zm-1-20.08L263.12,79l1.08-1.21L265.31,95Zm-.72-27.84L262,64.86V61h.14ZM261.23,60l.61-.36.08.36Zm-2,0h-5.52L252,59H261Zm-7.49,0h-.69l.08-.36ZM251,61v3.86l-1.15.68,1-4.54Zm-3.47,36.5,1.38,1.39.94,1.57h0l.21.34h0l1.85,3.09h0l.21.34h0l1.85,3.09h0l.13.23,0,0-7.75,7.75ZM246.4,117l9.48,12.42L250.69,136H245l1.23-19Zm3.5,20-5.36,6.79L245,137Zm-2,26.41-.9.82h0l-.26.24.12-2.53Zm-4.13,9.15h0l-1-1.08.2-3.07,1-.92Zm-2.67,25,1.47,1.71L241,232.19l-2.4,2.81ZM233.7,236v-2.8h.8V236Zm.8-3.2h-.8v-.4h.8Zm-1.2,0h-2.6v-.4h2.6Zm-3,0h-.8v-.4h.8Zm-.8.4h.8V236h-.8Zm-.37,10h5v4.6h-5Zm0,5h5v4.6h-5Zm0,5h5v4.6h-5Zm0,5h5v4.6h-5Zm0,5h5v4.6h-5Zm0,10h2.17V276h-2.17Zm6.57,7.32,3.1,1.3-.08,1.67L235.67,281Zm5.65,2.37,11.15,4.67v1.36l-4.64,2.18-6.63-5.52ZM253.5,288l.54.22-.54.26Zm4-8h14l-14,6.57Zm16-1-.05-1h2.4l-2.14,1Zm3.7-.53,0,.53H276ZM270.56,145.3l-.29-4.6h3.65v4.6Zm3.36-15h-4.33l-.13-2.05h4.46Zm1.88-6.65v3.6h-2.6v-3.6Zm-3,0v3.6h-2.6v-3.6Zm-3,0v3.6h-.4l-.23-3.6ZM266,61v5h-.7l-1.11-5Zm-9.95-7.5h.9l1.16,3.5h-3.22ZM247,61h1.81l-1.11,5H247Zm-4.5,0H246v5h-3.5Zm-1,11h4v1.3h-5V72Zm-1,16.7h5v2.55h-5Zm-1.8,3h.8v3.6h-.8Zm1.8,3.6V92.7h.8v2.55Zm1.2,0V92.7h2.6v2.55Zm3-2.55h.8v2.55h-.8Zm-1,64.78.72,1-.38,8.44-.17.15-.12.11h0l-.72.65ZM240.5,171.4V175h-2.6v-3.6Zm-3,0V175h-2.6v-3.6Zm-5.6,3.6v-3.6h2.6V175h-2.6Zm2.6,1h4.08v1.3h-5V176Zm-.92,6.7h5v4.6h-5Zm0-.4v-4.6h5v4.6Zm0,10v-4.6h5v4.6Zm6-16.3h.87l-.87,13.41Zm-2.78,56.4-.1,1.6v-1.6Zm-.5,0V236h-.8v-3.6Zm-6.8-19.2h5v4.6h-5Zm0,5h5v4.6h-5Zm0,5h5v4.6h-5Zm5-14.2v3.8h-5V209Zm-5,19.2h5V232h-5Zm-1.8,4.2h.8V236h-.8Zm-2,43.6v-3.6h2.43V276Zm6.43,2h1.73l-.09,1.37Zm3.42,4.84,3.09,2.57-.39,8.59H235.5v2.89l-.24.11h-.63Zm5.95,11.24V294h-.65l.29-6.5,5.19,4.31Zm7.21-2.28L252.5,290V295Zm6.79,5.66-2-1.66v-6.24l1.78-.83.22.09Zm2-8.89v-.89l14.07-6.59.71,13.68Zm16.83,7.06-.8-15.45.37-.18h3.37l1,15H274.5v.7Z" transform="translate(-25 -30.5)" />
                <rect className="j" x="206.5" y="164.5" width="50" height="14" />
                <rect className="k" x="206.5" y="175.5" width="50" height="2" />
                <rect className="k" x="206.5" y="172.5" width="50" height="1" />
                <rect className="g" x="209.5" y="114.5" width="44" height="12" />
                <rect className="e" x="211.5" y="116.5" width="1" height="8" />
                <rect className="e" x="214.5" y="116.5" width="1" height="8" />
                <rect className="e" x="217.5" y="116.5" width="1" height="8" />
                <rect className="e" x="220.5" y="116.5" width="1" height="8" />
                <rect className="e" x="223.5" y="116.5" width="1" height="8" />
                <rect className="e" x="226.5" y="116.5" width="1" height="8" />
                <rect className="e" x="229.5" y="116.5" width="1" height="8" />
                <rect className="e" x="232.5" y="116.5" width="1" height="8" />
                <rect className="e" x="235.5" y="116.5" width="1" height="8" />
                <rect className="e" x="238.5" y="116.5" width="1" height="8" />
                <rect className="e" x="241.5" y="116.5" width="1" height="8" />
                <rect className="e" x="244.5" y="116.5" width="1" height="8" />
                <rect className="e" x="247.5" y="116.5" width="1" height="8" />
                <rect className="e" x="250.5" y="116.5" width="1" height="8" />
                <polygon className="e" points="147.5 295.5 145.5 295.5 144.5 295.5 142.5 295.5 142.5 296.5 144.5 296.5 144.5 303.5 145.5 303.5 145.5 296.5 147.5 296.5 147.5 295.5" />
                <rect className="h" x="144" y="302.5" width="2" height="4" />
                <polygon className="e" points="148 308.5 148 306.5 147 306.5 147 305.5 143 305.5 143 306.5 142 306.5 142 308.5 143 308.5 143 309.5 142.5 309.5 142.5 311.5 147.5 311.5 147.5 309.5 147 309.5 147 308.5 148 308.5" />
                <rect className="h" x="143.5" y="298.5" width="3" height="1" />
                <rect className="h" x="143" y="296.5" width="4" height="1" />
                <rect className="i" x="143.5" y="292.5" width="3" height="3" />
                <path className="f" d="M353,323v-1H336.13v-3.62h.5v-2h-2v2h.5V322h-17v-3.62h.5v-2h-2v2h.5V322H294.5v-9h1v-1h-8v1h2v6H283v-.25h-3V319h-7.5v-.25h-2V319h-1v-.25h-4V319h-6v-.25h-6V319h-29v-3h5v-1h-5v-1h2.1v-1h-2.1v-5h5v-1h-5v-5h5v-1h-5v-3h-1v15h-5.85v0L197,326.89l-9,3-.52-.52-.71.71.17.16-24.12,7.94V336h-12V325.54h-1V341h-1v-2h-1V319.71h-1V339h-1v-5.29h-1V339h-2v5h-8.88v3h-7.66v2h60v-2h-3l1.26-.85,0,0,3.32-2.24.06,0,7.53-5.06,5.63,5.65-3.56,4.42,1.26,0,21.72-27,.54-.36.37-.25,5.13,8.52V330h-1v1h1v2h-2v1h2v11H222v4h62.5v-2h2v2h3v-1h4v1h1v-2h2.25v1h1v-.5h2V347h1.08v2h12v-1h-1.67l-.71-1H319v2h4v-1.16l.59-.84H336v2h2v-2h4.1v1h1v-.5h1V347h4.77v-1h-4.77v-.5h-1V345h-1v1H338v-8h10.87v-1H338v-6H352.5v-2h-4.37v-6ZM149.19,344h-.48v-1h.48Zm5.64,3h-1v-3h-2.52v-1h1v-1h2.56Zm.92-6.54-1.65.54h-3.35v-4h5Zm6,.54h-4.46l4.46-1.47Zm0-2.52-5,1.65V337h5Zm50.64-20.77,2.26,3.36-4,1.3L209.07,320Zm-6,7.14,3.95-1.3,1.3,1.93-3.32,2.24Zm1.1,3.42-3.32,2.24-2.71-4,4-1.29Zm3.84-5,3.94-1.3.52.76-3.32,2.23Zm-3-2.73,1.47,2.19-4,1.3-.84-1.25Zm-3.93,2.65-.22.15.69,1-3.95,1.3-.06-.08-.29.2Zm-6.89,4.64,3-1,2.87,4.27L200,333.3l-3.35-5Zm-3.51,1.15-4.13,2.78-1.06-1.07ZM165.58,342v-1h-2.83v-1.8l24.9-8.2,1.29,1.29L174.51,342Zm9.25,5v-4l.33-.22-.1.07,2.8,4.16Zm4.79,0h-.56l-3.17-4.72,3.31-2.23,3.35,5Zm3.76-2.53-3.35-5-.37.25,4.28-2.88-.59.4,3.35,5Zm4.15-2.8-3.35-5,3.32-2.24,3.35,5Zm4.15-2.79-3.35-5,1.33-.9,4.31,4.33Zm3.13-2.11-4.31-4.32,1.15-.78,3.35,5Zm-2.33-5.66,3.32-2.23,3.35,5-3.32,2.23Zm9.19,12.55-5.42-5.44,8.37-5.64.62-.41,3.32-2.24.07,0,9-6.08Zm14.9-21.53-.36-.53,2.24-.74Zm-.94-1.39-2.41-3.58,4.05-2.73-.73.49,3,4.52ZM221.5,319h-1v0l-3.13-4.66.54-.36h3.59Zm22,2h7.68l.34.58L250.06,324h-5.91l-.65-1.08Zm8.61,1.54L253,324h-1.75ZM243.5,325h.09l2.41,4h-2.5Zm1.92,9.59-.5,2.41H244ZM242.89,337H238.5v-3h6.1Zm2.29-4H238.5v-2h7.67l-.09.42Zm-2.68-9.8v.8h-1.27l.88-1.46Zm-5-2.2h3.68l.34.58L240.06,324H237.5Zm-6,.54,0,0,0,0Zm0,2,.61-1L233,324H231.5Zm0,1.45h2.09l2.41,4h-4.5Zm-1.66,8-.42-2h6.75l-.09.42-.9,1.58Zm4.76,1-3.34,5.84L230,334Zm-6.1-13h2v2.27l-.44.73H228.5Zm-6-7h1v5h-1Zm-.16,7h5.16v3h-.92v1h2.88l-2.35,3.9Zm8.16,4.21V329h-2.29ZM228.81,333h-.31v-1.5Zm-.31,1H229l1.49,7.15-2,3.52Zm1,11,1.36-2.37.49,2.37Zm2.88,0-.77-3.68,3.85-6.73L233.25,345Zm4.16-3h-1.6l1.6-7.69Zm0-14.1-1.75-2.9h1.75Zm0-3.9h-2.35l-1.46-2.42L233,321h3.46Zm1,1h2l-2,3.25Zm3.13,0h1.87v4h-4.29Zm-2.13,17v-4h3.82L240,342Zm5.38,0h-2.7l2.29-4h1.24Zm2.62,0h-1.6l.83-4h.77Zm0-5h-.56l.56-2.69Zm-1.75-12h4.71l-2.35,3.9Zm3.75,17v-4h1.36l.83,4Zm.52-8,.63,3H248.5v-3Zm-.52-1v-1.5l.31,1.5Zm5,9h-1.79l-.83-4h2.62Zm0-5h-2.83l-.63-3h3.46Zm0-4h-3.66l-.42-2h4.08Zm0-4h-5.29l2.42-4h2.87Zm0-6.08-.81-1.34L253,321h.46ZM266.32,331l-2.82,4.93V331Zm-.82-4.76-.75-1.24h.75ZM263,321h2.46v3h-1.35l-1.46-2.42Zm-1.54.54,0,0,0,0Zm0,2,.61-1L263,324H261.5Zm-2-2.55h1v2.27l-.44.73h-.56Zm0,5.87,1-1.66V329h-1Zm0,9.42.15.71h-.15Zm0,1.71h.36l.65,3.15-1,1.77Zm0,7v-.06l1.32-2.31.49,2.37Zm2-5.57-.24.41-.38-1.84h.62Zm0-2.43h-.83l-1.17-5.61V331h2Zm0-12h2.09l1.91,3.17V329h-4Zm3,20h-1v-7h1Zm0-8H264l.46-.8Zm.09-1,2.88-5h.93l1.05,5Zm5.91,0h0l-1.05-5h1.08Zm0-7h-1v-2.13l1-1.66Zm0-5.73-.44.73h-.56v-3h1Zm3-2.27h5v3h-4.35l-.65-1.08Zm0,4h.09l2.41,4h-2.5Zm-1,11v-5h3.67l-1.05,5Zm4,0h-.36l.36-1.73Zm-1.75-11h3.75v1.59l-1.39,2.31Zm3.75,3.53V329h-.29Zm0,7.51V331.5l.95,4.54Zm1.5-2.25-.58-2.79H280Zm0-4.79h-.5v-2.13l.5-.83Zm0-5h-.5v-3h.5Zm5.5,4.17.5.83h-.5Zm-2.5-7.11,0-.06h1.46v3h-.35L283,322.09Zm0,3.94h.59l.91,1.51V329H283Zm0,11v-5h3.17l-1.25,6h-.42v-1Zm1.71,2-.21,1v-1Zm1.79,8h-2v-2.1l1.23-5.9h.77Zm0-9h-.56l.56-2.69Zm2-8h-.29l.29-.47Zm0-2.41-1.39,2.31-1.61-2.66V325h3Zm0-3.59v1h-3v-3h3Zm1-2h1v1h-1Zm0,5.87,1-1.66V327h-1Zm0,1.13h1v1h-1Zm4,18h-4v-2h4Zm0-3h-4v-3h4Zm0-4h-4v-1h4Zm0-2h-4v-1h4Zm0-2h-4v-3h4Zm0-6h-2v-1h2Zm0-2h-2v-3h2Zm-2-5.39V321h.37Zm2,.39h-1.06l.6-1h.46Zm0-3h-3v-6h3Zm36.63,4h5v6h-5Zm-6,0h5v6h-5Zm-6,0h5v6h-5ZM331,331v1.13l1.52.46L329.44,337H308.5v-6Zm-18.91-8h5v6h-5Zm-6,0h5v6h-5Zm-6,0h5v6h-5Zm7.37,8v6h-4.12l-4.25-6Zm1.24,15h-1.91v-2.7ZM294.5,328v-5h4.63v6H294.5Zm0,8v-5h3.63l4.25,6H294.5Zm9.33,6v-1h-2v1h-1v4h-1.08v-.5h-2V345h-1v1H294.5v-8h8.58l2.83,4Zm.25-4h3.42v4.83Zm2.75,10v-1h2.62l.71,1Zm16.25-2H309.74l-1.24-1.75V338h20.23ZM336,346H324.3l5.66-8h6Zm0-9h-5.29l4.24-6h1Zm5.17-8h-5v-6h5Zm6,0h-5v-6h5Z" transform="translate(-25 -30.5)" />
                <rect className="l" x="337.5" y="278.5" width="20" height="11" />
                <rect className="m" x="323.5" y="306.5" width="100" height="12" />
                <rect className="d" x="327.5" y="288.5" width="60" height="18" />
                <rect className="h" x="343.5" y="305.5" width="40" height="1" />
                <rect className="h" x="351.5" y="298.5" width="8" height="1" />
                <rect className="h" x="404.83" y="310.5" width="14" height="1" />
                <rect className="h" x="339.5" y="287.5" width="14" height="1" />
                <rect className="h" x="326" y="312.5" width="1" height="6" />
                <rect className="h" x="370" y="314.5" width="1" height="4" />
                <rect className="h" x="365" y="314.5" width="1" height="4" />
                <rect className="h" x="370" y="293" width="1" height="6" />
                <rect className="h" x="380" y="293" width="1" height="6" />
                <rect className="h" x="356" y="293" width="1" height="6" />
                <rect className="h" x="353" y="281" width="1" height="4" />
                <rect className="h" x="343" y="281" width="1" height="4" />
                <rect className="h" x="395" y="310.5" width="1" height="8" />
                <rect className="e" x="380" y="274.5" width="1" height="6" />
                <rect className="e" x="378" y="272.5" width="5" height="1" />
                <rect className="h" x="379.5" y="279.5" width="2" height="4" />
                <rect className="h" x="379" y="275.5" width="3" height="1" />
                <polygon className="e" points="383.5 285.5 383.5 283.5 382.5 283.5 382.5 282.5 378.5 282.5 378.5 283.5 377.5 283.5 377.5 285.5 378.5 285.5 378.5 286.5 378 286.5 378 288.5 383 288.5 383 286.5 382.5 286.5 382.5 285.5 383.5 285.5" />
                <rect className="h" x="378.5" y="273.5" width="4" height="1" />
                <rect className="i" x="379" y="269.5" width="3" height="3" />
                <path className="f" d="M390.5,292v-.5h-1v.5h-11v-2h3v-1h-3V270.42h.5v-1h-.5V267h-5v-1h1v-1H372v-1h1v-1h-1.5v-2h.5v-1H360v1h.5v2H359v1h1v1h-2.5v1h1v13h-3v12h-3v1h1v57h1v-3h4v3h2v-3h1v3h1V315h9v34h2V296H375v-2h-1.5v-.5h2V293h14v.5h1V293h2v-1Zm-22-31h2v2h-2Zm-4,0h3v2h-3Zm-3,0h2v2h-2Zm-3,84h-4v-5h4Zm0-6h-4v-5h4Zm0-6h-4v-5h4Zm0-6h-4v-5h4Zm0-6h-4v-5h4Zm0-6h-4v-5h4Zm0-6h-4v-5h4Zm0-6h-4v-5h4Zm0-9H357v2h1.5v1h-4v-5h4Zm-2-5v-9h2v9Zm6,7h7.33l-7.33,3.71V296Zm-1,49h-1v-5h1Zm0-6h-1v-5h1Zm0-6h-1v-5h1Zm0-6h-1v-5h1Zm0-6h-1v-5h1Zm0-7h-.18l.18-.18Zm0-1.61-1,1V310h1Zm0-3.39h-1v-5h1Zm0-6h-1v-1h1Zm0-2.78-1,.51V298h1Zm0-3.22h-1v-1h1Zm0-3h-1v-2h1Zm10,20h-9v-1.21l9-9.2Zm0-11.84-9,9.2V302h9Zm0-1.16h-9v-.17l9-4.56Zm0-7h-9v-2h5v1.5h4Zm4-5h-2v-9h2Zm2-19.58H377v1h.5V291h-1V279h-3V268h4Z" transform="translate(-25 -30.5)" />
                <rect className="a" x="343.5" y="235.5" width="3" height="13" />
                <rect className="a" x="343.5" y="249.5" width="3" height="9" />
                <rect className="a" x="335.5" y="235.5" width="1" height="13" />
                <rect className="a" x="335.5" y="249.5" width="1" height="9" />
                <rect className="f" x="206.5" y="266.5" width="13" height="2" />
                <rect className="n" x="201.5" y="267.5" width="57" height="21" />
                <polygon className="o" points="264.5 273.5 262.5 273.5 222.5 273.5 220.5 273.5 220.5 288.5 262.5 288.5 262.5 278.5 264.5 278.5 264.5 273.5" />
                <rect className="h" x="206.5" y="273.5" width="6" height="1" />
                <rect className="h" x="206.5" y="278.5" width="6" height="1" />
                <rect className="h" x="206.5" y="283.5" width="6" height="1" />
                <polygon className="h" points="220.5 273.5 258.5 273.5 258.5 272.5 219.5 272.5 219.5 288.5 220.5 288.5 220.5 273.5" />
                <rect className="h" x="222.5" y="285.5" width="38" height="1" />
                <rect className="h" x="241" y="279" width="1" height="5" />
                <rect className="h" x="232" y="279" width="1" height="5" />
                <rect className="h" x="223" y="279" width="1" height="5" />
                <rect className="h" x="250" y="279" width="1" height="5" />
                <rect className="h" x="259" y="279" width="1" height="5" /> */}
            </svg>
        );
    }
}

export default Banner;



