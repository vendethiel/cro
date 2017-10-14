import $ from 'jquery';

export const STUB_TEMPLATES             = 'STUB_TEMPLATES';
export const STUB_STUBBED               = 'STUB_STUBBED';
export const STUB_OPTIONS_ERROR_OCCURED = 'STUB_OPTIONS_ERROR_OCCURED';
export const STUB_STUB_ERROR_OCCURED    = 'STUB_STUB_ERROR_OCCURED';
// User actions
export const STUB_SELECT                = 'STUB_SELECT';
export const STUB_CHANGE_ID_TEXT        = 'STUB_CHANGE_ID_TEXT';
export const STUB_CHANGE_OPTION         = 'STUB_CHANGE_OPTION';
export const STUB_STUB_SENT             = 'STUB_STUB_SENT';

export function stubSelect(index) {
    return { type: STUB_SELECT, index };
}

export function stubChangeIdText(text) {
    return { type: STUB_CHANGE_ID_TEXT, text };
}

export function stubChangeOption(id, value) {
    return { type: STUB_CHANGE_OPTION, id, value }
}

export function stubStub(id, type, options) {
    return dispatch => {
        $.ajax({
            url: '/stub',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ id, type, options: Array.from(options) }),
            success: () => dispatch({ type: STUB_STUB_SENT })
        });
    };
}
