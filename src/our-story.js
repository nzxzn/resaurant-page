function addStory() {
    const paragraphs = [
'        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error distinctio eveniet laudantium sint? Quas velit cum ut expedita magni quis quod, adipisci odit mollitia repudiandae ab ex quidem, dolorem magnam earum sit sunt facilis voluptatem vel atque excepturi rem impedit! Aliquid ullam eaque corporis labore quis et officiis, quasi veritatis repellendus obcaecati, nostrum est delectus. Quibusdam dolores laudantium tenetur, maxime minima, repudiandae animi ab a nesciunt accusantium omnis quam dolor totam, cumque provident pariatur corrupti. Provident dolores sequi eaque tempora pariatur incidunt nulla perspiciatis illum earum voluptate quis in odit et voluptas mollitia, ipsum cumque dolorum minima est cum tempore.',
'        Consectetur delectus sit earum ea numquam maxime saepe, incidunt labore molestiae esse similique debitis nihil rerum deleniti dolor maiores excepturi ab culpa nemo exercitationem animi quae reprehenderit? Eum incidunt quae, facilis sint dignissimos voluptates blanditiis, dolorem autem soluta velit necessitatibus in consectetur, possimus error temporibus quo iusto neque. Error ipsa non unde earum quasi reiciendis corrupti. Minima incidunt commodi blanditiis possimus molestias? Quidem aut assumenda dolorem cupiditate officia error sit cumque distinctio rem, molestias minus doloremque facilis porro exercitationem excepturi nulla unde vero molestiae et quas, itaque esse alias quos magni? Earum esse autem impedit debitis dolores eum unde odio?',
'        Illum eos iste numquam sequi aut est ad, esse suscipit in iusto, officiis ipsum atque debitis doloremque. Totam corporis minima reprehenderit dolor quasi consequatur delectus ab aut sint officia veniam vero eligendi, et molestias laudantium? Repellendus facere vero aliquid culpa porro pariatur earum qui laudantium libero molestias similique, officiis perspiciatis veritatis quasi ipsa dolore, labore eaque? Veritatis consequatur amet saepe possimus beatae voluptatum corrupti id fugit quasi aliquam quisquam perspiciatis, ipsa illum, distinctio rem optio voluptate exercitationem debitis. Eos ipsam enim quis reiciendis delectus quo minima nobis error ex, tempore unde qui debitis et recusandae, nam, neque earum sed mollitia!',
'        Dolore magni dolores aliquam consectetur nesciunt soluta pariatur consequuntur dolorem officiis est fugiat quae minus asperiores nemo odio et porro rerum, excepturi similique! Possimus, nemo. Vero nihil, mollitia nobis fugiat modi quo obcaecati sit, provident nemo eaque dolorem minima, quidem beatae dolorum earum incidunt illo non! Voluptatibus dignissimos exercitationem cum nesciunt. Facere explicabo est ipsa reprehenderit. At, impedit incidunt quos deserunt corrupti obcaecati nesciunt deleniti aliquid vel cumque iure distinctio, nostrum rerum, fugit non sunt. Mollitia debitis praesentium eligendi nam eveniet vitae inventore error reiciendis consequuntur necessitatibus, in, animi eaque saepe, assumenda ipsum officiis ut voluptatum. Quaerat voluptates corporis rem?',
'        Nulla, quasi perspiciatis aperiam sed consequuntur beatae sint, doloribus aut odio atque voluptatem expedita architecto ipsa accusamus! Nesciunt suscipit nostrum doloribus error quasi expedita, architecto numquam. Aut deleniti, atque numquam voluptatem, ducimus vitae illo quisquam maxime sed omnis placeat magni explicabo sint delectus nesciunt quis debitis amet quos nulla velit possimus! Praesentium fuga ut sit aperiam. Ad tempora fugiat praesentium molestias vero porro veritatis, asperiores assumenda laboriosam magnam aliquam pariatur, odio minus aspernatur, sint obcaecati doloribus exercitationem quidem commodi nemo sapiente unde architecto beatae. Reprehenderit ut repudiandae, quaerat nesciunt possimus ea quisquam aliquid. Explicabo nesciunt temporibus nostrum molestiae doloribus voluptate!', 
    ]

    const storyContainer = document.createElement('div');

    for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = document.createElement('p');
        paragraph.textContent = paragraphs[i]
        storyContainer.appendChild(paragraph);
    }

    return storyContainer
}

export default function loadStory() {
    document.getElementById('content').appendChild(addStory());
}