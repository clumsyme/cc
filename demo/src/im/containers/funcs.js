import emojis from './emojis'


/**
 * 获取可编辑元素光标位置，可用于插入表情
 * @param {HTMLElement} editableDiv 
 * @author Tim Down (https://stackoverflow.com/a/3976125/6630647)
 */
export function getCaretPosition(editableDiv) {
    var caretPos = 0,
        sel, range;
    sel = window.getSelection();
    if (sel.rangeCount) {
        range = sel.getRangeAt(0);
        if (range.commonAncestorContainer.parentNode == editableDiv) {
            caretPos = range.endOffset;
        }
    }

    return caretPos;
}

/**
 * 使一个元素可以被拖动
 * 注意，此函数用于absolute定位的元素
 * 且元素需有一个类名为forDrag的子元素
 * @param {selector} CSS Selector 
 * @author LiYan
 */
export function makeDragable(selector) {
    const element = document.querySelector(selector)
    const forDrag = element.querySelector('.forDrag')
    forDrag.addEventListener('mousedown', (e) => {
        element.dragging = true
        element.dragX = e.clientX
        element.dragY = e.clientY
        element.left = Number(window.getComputedStyle(element).left.split('p')[0])
        element.top = Number(window.getComputedStyle(element).top.split('p')[0])
    })
    forDrag.addEventListener('mousemove', (e) => {
        if (element.dragging) {
            element.style.left = (element.left + e.clientX - element.dragX) + 'px'
            element.style.top = (element.top + e.clientY - element.dragY) + 'px'
        }
    })
    forDrag.addEventListener('mouseup', () => {
        element.dragging = false
    })
}

/**
 * 将一个scroll元素在time时间内滚动至底部
 * @param {HTMLElement} comp 
 * @param {number} time 
 */
export function scrollBottom(comp, time = 125) {
    if (time === 0) {
        comp.scrollTop = comp.scrollHeight - comp.clientHeight
        return
    }
    let needScroll = comp.scrollHeight - comp.scrollTop - comp.clientHeight
    let speed = needScroll / time

    let it = setInterval(() => {
        if (comp.scrollTop < comp.scrollHeight - comp.clientHeight) {
            comp.scrollTop += speed * 10
        } else {
            clearInterval(it)
        }
    }, 10)
}

/**
 * 将表情符号转为表情图片
 * 并将字符串content内除 <img> 标签外的其他标签进行转义；
 * @param {string} content
 * @return {string}
 */
export function parseContent(content) {
    const rgtag = /(\[.*?\])/g
    const parse = (match, tag) => {
        for (let emoji of emojis) {
            if (emoji.tag === tag) {
                return `<img class="im-bubble-emoji" src="/emoji/emoji_07.png" alt="${emoji.tag}" />`
                // return `<img class="im-bubble-emoji" src="${emoji.file.toString()}" alt="${emoji.tag}" />`
            }
        }

        return tag
    }
    content = content.replace(rgtag, parse)


    const rg = /<(?!img)(.*?)>/g
    const convert = (match, tag) => {
        return '&lt' + tag + '&gt'
    }
    return content.replace(rg, convert)
}