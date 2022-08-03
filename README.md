# Welcome to My Personal Website

This is a simple website to host my:

- personal information
- projects
- achievements.

The most notable feature is the projects page and how individual project's content is displayed. A **Dynamic Content Loading System** is created using a stack-based architecture to procedurally generate HTML tags and its corresponding content. Below is the full documentation of the dynamic content loading algorithm.

## Dynamic Content Loading

A `layout string` is a sequence of tags to be inputted to algorithm which will understand how to build the website's content in correct ordering and styling.

### Content

Content has to be formatted in a specific way for the dynamic content loading algorithm to function correctly. The following is an example of how content is formatted.

```json
{
    "example1": {
        "layout": "t0s0o1p1p2p3c-i0",
        "t0": "title",
        "s0": "subtitle",
        "p1": "text paragraph 1",
        "p2": "text paragraph 2",
        "p3": "text paragraph 3",
        "i0": {
            "width": 20,
            "height": 20,
            "href": "path/to/image.png",
        }
    }
}
```

### Tags

A tag is composed of 2 characters. The **first character** determines the type of `<html tag>` used to create the content. These characters and its corresponding meaning is showed below. The **second character** determines the type of styling or the content index in the json data structure.

#### Tag Chart

| symbol | meaning                                        | type |
| ------ | ---------------------------------------------- | ---- |
| t      | title                                          | 0    |
| s      | subtitle                                       | 0    |
| a      | about text (bit bigger than normal p)          | 0    |
| p      | text                                           | 0    |
| b      | bold text                                      | 0    |
| o      | text box (html div) 3h size                    | 1    |
| q      | text box (html div) 2h size                    | 1    |
| x      | highlighted text box (box shadow glow) 3h size | 1    |
| y      | highlighted text box (box shadow glow) 2h size | 1    |
| d      | bottom border text box                         | 2    |
| e      | closing tag for text boxes                     | 2    |
| i      | image                                          | 0    |
| h      | half horizontal split (vertical for mobile)    | 1    |
| h      | force half horizontal split                    | 1    |
| c      | code block (not implemented yet)               | 1    |
| f      | closing tag for code blocks                    | 2    |
| l      | list bullet point                              | 0    |
| g      | github button                                  | 3    |
| r      | read more button                               | 3    |

### Layout String Parsing

The parsing algorithm uses stacks to progressively generate content while reading the tags one by one.

```python
tStack = []
eStack = []
for each tag t
    if t.type == 0
        eStack.top().append(createElement(t))
    if t.type == 1
        eStack.push(new Array())
        tStack.push(t)
    if t.type == 2
        div = createDiv(eStack.pop(), tStack.pop())
        eStack.top().append(div)
    if t.type == 3
        eStack.top().append(createButton(t))

root = createDiv(eStack.pop(), 'root')
```

Using the algorithm above `example 1` will be parsed as follows

```html
<div className={styles.root}>
    <p className={styles.title}>{data[t0]}</p>
    <p className={styles.subtitle}>{data[s0]}</p>
    <div className={styles.m1}>
        <p className={styles.text}>{data[p1]}</p>
        <p className={styles.text}>{data[p2]}</p>
        <p className={styles.text}>{data[p3]}</p>
    </div>
    <Image src={data[i0].herf} alt='img'
        width={data[i0].width}
        height={data[i0].height}
    />
</div>
```
