import React, { useEffect } from 'react'
import '../css/App0826c.css'
import img from '../images/p1.jpg'
import $ from 'jquery'

const App = () => {
    useEffect(() => {
        $('a:has(.ttpShow)').mouseover(function (e) {
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>')
            $('#ttpPanel').css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 10) + 'px'
            }).fadeIn('1000');
        }).mousemove(function (e) {
            $('#ttpPanel').css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 10) + 'px'
            })

        }).mouseout(function () {
            $('#ttpPanel').remove();
        })

    }), []



return (

    <div className="wrap">
        <h1>Tooltip</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sapiente, nobis sint sed nisi quam consequatur
            mollitia ut ratione.
            <a href="#">Reiciendis
                <span className="ttpShow">Reiciendis內容說明</span>
            </a>
            porro est ut dolore laboriosam atque quibusdam explicabo eveniet, ipsum,
            ipsam quaerat ab
            <a href="#">excepturi
                <span className="ttpShow">excepturi內容說明</span>
            </a>
            sapiente accusamus id, eius autem tempora. Voluptas repellendus, eum dolores
            culpa voluptate dolore dicta laboriosam labore alias, velit beatae! At fugit itaque perspiciatis quod dolor
            illum? Explicabo vitae eos, quaerat id nesciunt earum voluptate sint tempore, labore, officiis voluptatem.
            Ea aspernatur facere aliquid velit amet eaque nesciunt fuga doloremque, tenetur pariatur quidem suscipit,
            voluptate assumenda. Laudantium quo illo mollitia inventore, vel ex sunt atque placeat odit dolor nisi ea
            modi odio vero dignissimos adipisci est veritatis exercitationem dolorem deserunt. Nihil numquam neque
            facere, aliquam quas inventore ut accusamus, vero qui sit, officiis accusantium enim. Accusantium minima
            maiores, fugit, aliquid, ducimus quaerat est vero distinctio nulla nobis magni illum modi. Similique omnis
            quis corrupti consequatur temporibus eligendi quasi totam laborum neque nisi provident quam deserunt,
            architecto iusto, eveniet cumque. Nostrum in laboriosam libero quis, soluta sit minus, vel incidunt, modi
            non cupiditate! Consectetur in
            <a href="#">consequuntur
                <span className="ttpShow">consequuntur內容說明</span>
            </a>
            ipsum eius iure ullam quae saepe? Sed soluta possimus aliquam
            corrupti! Omnis qui repudiandae nostrum veritatis maxime quia voluptatum consequatur sunt dignissimos! Quod
            optio quaerat porro similique repellat! Quia quae distinctio quaerat ipsa natus autem rem molestiae
            inventore nobis? Repudiandae corporis dolorum incidunt quod beatae optio? Ducimus vero, hic eum labore
            incidunt voluptatum ab? Omnis ipsum tenetur dicta explicabo iste quaerat odit eum illo dolores officiis
            accusantium numquam totam nisi libero, nihil cum voluptatem eos dignissimos fugit obcaecati rem nulla
            eveniet architecto? Enim molestiae commodi, ex tenetur tempora iure provident? Laborum quod aperiam rem
            repellendus earum similique aliquid, ipsum tempora magni! Voluptates obcaecati aspernatur fuga. Dignissimos
            quaerat officia quas doloribus deleniti a corporis praesentium, blanditiis provident iure possimus illo sint
            soluta ea distinctio porro consequatur, magnam quis rem aut magni. Quidem, adipisci pariatur ab eius
            similique numquam. Officia, tempora autem? Alias nostrum, reiciendis quis adipisci itaque, atque,
            consequatur non exercitationem fugit consequuntur
            <a href="#"><img src={img} alt="" />
                <span className="ttpShow">圖片說明</span>
            </a>
            quibusdam blanditiis sequi maxime quaerat praesentium
            ratione debitis sed! Quod, labore tenetur nam ut in esse at blanditiis laborum magni, eum est eos
            perspiciatis, ullam dignissimos sint aut quos enim? Fuga eius expedita, pariatur animi molestias, placeat
            hic facere qui aliquam illo voluptatem error! Repudiandae eaque sed saepe explicabo commodi nostrum tempora
            modi. Error, consequuntur facere deleniti fugiat natus voluptas, obcaecati cupiditate magni perferendis quo
            perspiciatis? Corporis, fuga. Voluptatem quae voluptas quis? Unde facere debitis nam vero mollitia,
            veritatis asperiores! Sit, aliquam quisquam. Dolorem tempore placeat, possimus eligendi fugit ipsum.
            Recusandae non quisquam porro, impedit iusto nulla quidem eligendi aliquid illum mollitia consequuntur saepe
            voluptatibus corrupti enim ex est, odio quia. Fugiat iste aperiam nesciunt accusamus corrupti illo explicabo
            atque aliquid. Quam repellendus aut porro iste pariatur rem fugiat incidunt sit aspernatur vitae
            exercitationem autem provident, omnis quaerat facere placeat! Perferendis cumque magni earum eaque facere
            pariatur reprehenderit minima, natus adipisci ut culpa quam labore quas similique libero neque! Molestiae
            temporibus sed odio, numquam earum suscipit praesentium non itaque exercitationem.
        </p>
    </div>
)
}

export default App