import { html } from 'lit-element';

export default function render() { 
return html`
    <style>
        :host {
            display: block;
            padding: 10px 20px;
            background: black;
            box-sizing: border-box;
        }

        .container {
            height: 250px;
        }
    </style>
    <div class="container">
        <h1 style="color: white;">This is a text reader, pdfs and txts</h1>
    </div>
`
}
