import * as Config from './config.js'

function emailConfirm(nick, hash) {
    let email = `<div class="es-wrapper-color">
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#fafafa"></v:fill>
    </v:background>
    <![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
            <td class="esd-email-paddings" valign="top">
                <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
                    <tbody>
                    <tr>
                        <td class="esd-stripe" align="center" esd-custom-block-id="388982">
                            <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;" bgcolor="rgba(0, 0, 0, 0)">
                                <tbody>
                                <tr>
                                    <td class="esd-structure es-p20" align="left">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                            <tr>
                                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-header" align="center">
                    <tbody>
                    <tr>
                        <td class="esd-stripe" align="center" esd-custom-block-id="388981">
                            <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                <tbody>
                                <tr>
                                    <td class="esd-structure es-p10t es-p10b es-p20r es-p20l" align="left">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                            <tr>
                                                <td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td class="esd-block-html">
                                                                <div align="center" class="game-name" style="font-weight: 700;

                                                        \t\t\tfont-size: 55px;
                                                        \t\t\ttext-shadow: 0px 2px 2px rgba(255,255,255,0.5);
                                                        \t\t\tcolor: #745FF2;
                                                                    background: #D3E2FE;
                                                                    font-family: 'Roboto', sans-serif;">
                                                                    <span style="
                                                        \t\t\ttext-shadow: 0px 2px 2px rgba(255,255,255,0.5);
                                                        \t\t\tcolor: #C590EF;
                                                        \t\t  ">Neo</span>Chess <i class="icon-rook"><svg style="fill: #34258C90; height: 60px; margin-bottom: -15px;" viewBox="0 0 640 512"><path d="M608 159.1c-18.85 0-25.44 13.31-27.03 16H544V80C544 35.82 508.2 0 464 0h-288C131.8 0 96 35.82 96 80v95.1H59.03C57.44 173.3 50.85 159.1 32 159.1c-17.06 0-32 13.72-32 32c0 18.3 14.97 31.1 32 31.1c18.85 0 25.44-13.3 27.03-15.1H96v127.1c0 44.18 35.82 80 80 80L224 415.1v83.99C224 503.3 226.7 512 236 512c2.521 0 4.998-.8086 7.096-2.328L368 415.1l96 .0059c44.18 0 80-35.82 80-80V207.1h36.98C582.6 210.7 589.2 223.1 608 223.1c17.06 0 32-13.72 32-31.1C640 173.7 625.1 159.1 608 159.1zM496 335.1c0 17.64-14.36 32-31.1 32l-112-.0078L272 428v-60.03l-96 .0117c-17.64 0-32-14.36-32-32V80c0-17.64 14.36-32 32-32h288c17.64 0 32 14.36 32 32V335.1zM448 96H192C174.3 96 160 110.3 160 128v128c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V128C480 110.3 465.7 96 448 96zM240 224c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32s32 14.33 32 32C272 209.7 257.7 224 240 224zM400 224c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32s32 14.33 32 32C432 209.7 417.7 224 400 224z"/></svg></i></div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                    <tbody>
                    <tr>
                        <td class="esd-stripe" align="center">
                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                <tbody>
                                <tr>
                                    <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                            <tr>
                                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td align="center" class="esd-block-image es-p10t es-p10b" style="font-size: 0px;"><a target="_blank"></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" class="esd-block-text es-p10b es-m-txt-c">
                                                                <h1 style=" font-family: 'Rubik', sans-serif; color: #414246; font-size: 46px;  font-weight: 400; line-height: 100%;">Confirm Your Email</h1>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" class="esd-block-text es-p10b es-m-txt-c">
                                                                <h1 style=" font-family: 'Rubik', sans-serif; color: #414246; font-size: 35px;  font-weight: 400; line-height: 100%;">Здравствуйте, ${nick}</h1>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" class="esd-block-text es-p5t es-p5b es-p40r es-p40l es-m-p0r es-m-p0l">
                                                                <p style="font-family: 'Rubik', sans-serif; color: #414246;">Для завершения процесса регистрации, пожалуйста, пройдите по ссылке</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" class="esd-block-button es-p10t es-p10b"><span class="es-button-border" style="font-family: 'Rubik', sans-serif; color: #414246; border-radius: 6px; padding: 20px; width: 50%; display: block; background: #745ff2;"><a href='${Config.__server.domain+'/activeted?hash='+hash}' class="es-button" target="_blank" style="border-radius: 6px; border-left-width: 5px; border-right-width: 5px; text-decoration: none; color: #fff; font-weight: 700; display: block; background: #745ff2; border-color: #745ff2;">CONFIRM YOUR EMAIL</a></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" class="esd-block-text es-p5t es-p5b es-p40r es-p40l es-m-p0r es-m-p0l">
                                                                <p style="font-family: 'Rubik', sans-serif; color: #414246;">Хороших вам партий!<br><br></p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" class="esd-block-text">
                                                                <p style="font-family: 'Rubik', sans-serif; color: #414246;">Если вы не зарегистрировали аккаунт на NeoChess, пожалуйста, проигнорируйте это сообщение.</p>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                            <tr>
                                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td align="left" class="esd-block-text">
                                                                <p style="font-family: 'Rubik', sans-serif; color: #414246;">С любовью,<br>Команда NeoChess.</p>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                    <tbody>
                    <tr>
                        <td class="esd-stripe" align="center" esd-custom-block-id="388980">
                            <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="640" style="background-color: transparent;">
                                <tbody>
                                <tr>
                                    <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                            <tr>
                                                <td width="600" class="esd-container-frame" align="left">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td align="center" class="esd-block-social es-p15t es-p15b" style="font-size:0">

                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="esd-block-menu" esd-tmp-menu-padding="5|5" esd-tmp-divider="1|solid|#cccccc" esd-tmp-menu-color="#999999">

                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                    <tbody>
                    <tr>
                        <td class="esd-stripe" align="center" esd-custom-block-id="388983">
                            <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;" bgcolor="rgba(0, 0, 0, 0)">
                                <tbody>
                                <tr>
                                    <td class="esd-structure es-p20" align="left">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                            <tr>
                                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>`
    return email
}

function emailRecovery(nick, hash) {
    let email = `<div class="es-wrapper-color">
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#fafafa"></v:fill>
    </v:background>
    <![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
            <td class="esd-email-paddings" valign="top">
                <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
                    <tbody>
                    <tr>
                        <td class="esd-stripe" align="center" esd-custom-block-id="388982">
                            <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;" bgcolor="rgba(0, 0, 0, 0)">
                                <tbody>
                                <tr>
                                    <td class="esd-structure es-p20" align="left">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                            <tr>
                                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-header" align="center">
                    <tbody>
                    <tr>
                        <td class="esd-stripe" align="center" esd-custom-block-id="388981">
                            <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                <tbody>
                                <tr>
                                    <td class="esd-structure es-p10t es-p10b es-p20r es-p20l" align="left">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                            <tr>
                                                <td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td class="esd-block-html">
                                                                <div align="center" class="game-name" style="font-weight: 700;

                                                        \t\t\tfont-size: 55px;
                                                        \t\t\ttext-shadow: 0px 2px 2px rgba(255,255,255,0.5);
                                                        \t\t\tcolor: #745FF2;
                                                                    background: #D3E2FE;
                                                                    font-family: 'Roboto', sans-serif;">
                                                                    <span style="
                                                        \t\t\ttext-shadow: 0px 2px 2px rgba(255,255,255,0.5);
                                                        \t\t\tcolor: #C590EF;
                                                        \t\t  ">Neo</span>Chess <i class="icon-rook"><svg style="fill: #34258C90; height: 60px; margin-bottom: -15px;" viewBox="0 0 640 512"><path d="M608 159.1c-18.85 0-25.44 13.31-27.03 16H544V80C544 35.82 508.2 0 464 0h-288C131.8 0 96 35.82 96 80v95.1H59.03C57.44 173.3 50.85 159.1 32 159.1c-17.06 0-32 13.72-32 32c0 18.3 14.97 31.1 32 31.1c18.85 0 25.44-13.3 27.03-15.1H96v127.1c0 44.18 35.82 80 80 80L224 415.1v83.99C224 503.3 226.7 512 236 512c2.521 0 4.998-.8086 7.096-2.328L368 415.1l96 .0059c44.18 0 80-35.82 80-80V207.1h36.98C582.6 210.7 589.2 223.1 608 223.1c17.06 0 32-13.72 32-31.1C640 173.7 625.1 159.1 608 159.1zM496 335.1c0 17.64-14.36 32-31.1 32l-112-.0078L272 428v-60.03l-96 .0117c-17.64 0-32-14.36-32-32V80c0-17.64 14.36-32 32-32h288c17.64 0 32 14.36 32 32V335.1zM448 96H192C174.3 96 160 110.3 160 128v128c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V128C480 110.3 465.7 96 448 96zM240 224c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32s32 14.33 32 32C272 209.7 257.7 224 240 224zM400 224c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32s32 14.33 32 32C432 209.7 417.7 224 400 224z"/></svg></i></div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                    <tbody>
                    <tr>
                        <td class="esd-stripe" align="center">
                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                <tbody>
                                <tr>
                                    <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                            <tr>
                                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td align="center" class="esd-block-image es-p10t es-p10b" style="font-size: 0px;"><a target="_blank"></a></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" class="esd-block-text es-p10b es-m-txt-c">
                                                                <h1 style=" font-family: 'Rubik', sans-serif; color: #414246; font-size: 46px;  font-weight: 400; line-height: 100%;">Recovery Your Password</h1>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" class="esd-block-text es-p10b es-m-txt-c">
                                                                <h1 style=" font-family: 'Rubik', sans-serif; color: #414246; font-size: 35px;  font-weight: 400; line-height: 100%;">Здравствуйте, ${nick}</h1>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" class="esd-block-text es-p5t es-p5b es-p40r es-p40l es-m-p0r es-m-p0l">
                                                                <p style="font-family: 'Rubik', sans-serif; color: #414246;">Для восстановления пароля, пожалуйста, пройдите по ссылке</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" class="esd-block-button es-p10t es-p10b"><span class="es-button-border" style="font-family: 'Rubik', sans-serif; color: #414246; border-radius: 6px; padding: 20px; width: 50%; display: block; background: #745ff2;"><a href='${Config.__server.domain+'/recovery?hash='+hash}' class="es-button" target="_blank" style="border-radius: 6px; border-left-width: 5px; border-right-width: 5px; text-decoration: none; color: #fff; font-weight: 700; display: block; background: #745ff2; border-color: #745ff2;">CHANGE PASSWORD</a></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" class="esd-block-text es-p5t es-p5b es-p40r es-p40l es-m-p0r es-m-p0l">
                                                                <p style="font-family: 'Rubik', sans-serif; color: #414246;">Хороших вам партий!<br><br></p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" class="esd-block-text">
                                                                <p style="font-family: 'Rubik', sans-serif; color: #414246;">Если вы не меняли пароль, пожалуйста, проигнорируйте это сообщение.</p>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                            <tr>
                                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td align="left" class="esd-block-text">
                                                                <p style="font-family: 'Rubik', sans-serif; color: #414246;">С любовью,<br>Команда NeoChess.</p>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                    <tbody>
                    <tr>
                        <td class="esd-stripe" align="center" esd-custom-block-id="388980">
                            <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="640" style="background-color: transparent;">
                                <tbody>
                                <tr>
                                    <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                            <tr>
                                                <td width="600" class="esd-container-frame" align="left">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td align="center" class="esd-block-social es-p15t es-p15b" style="font-size:0">

                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td class="esd-block-menu" esd-tmp-menu-padding="5|5" esd-tmp-divider="1|solid|#cccccc" esd-tmp-menu-color="#999999">

                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                    <tbody>
                    <tr>
                        <td class="esd-stripe" align="center" esd-custom-block-id="388983">
                            <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;" bgcolor="rgba(0, 0, 0, 0)">
                                <tbody>
                                <tr>
                                    <td class="esd-structure es-p20" align="left">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                            <tr>
                                                <td width="560" class="esd-container-frame" align="center" valign="top">
                                                    <table cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                        <tr>
                                                            <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>`
    return email
}

export {emailConfirm, emailRecovery}