import './App.css'
import video from './image/Background1.mp4'
import Navbar from './Component/Navbar/Navbar'
import Actor1 from './image/Actor1.jpg'
import Actor2 from './image/Actor2.jpg'
import Actor3 from './image/Actor3.jpg'
import Actor4 from './image/Actor4.jpg'
import Actor5 from './image/Actor5.jpg'

function App() {
  return (
    <>
      <Navbar/> 

      <header id='Home'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>

       <div className="text">
       <h2>LOOKING FOR THE PERFECT OUTFIT?</h2>
       <h1>Discover top-quality styles for every occasion with Artisan Denish Co.</h1>
       <button>Browse Our Store</button>
       </div>
      </header>

      <main>
        <div className="About-Us" id='About Us'>
          <div className="image">
            <div className="card1">
              <img src={Actor1} alt="" />
            </div>
            <div className="card2">
              <img src={Actor2} alt="" />
            </div>
          </div>

          <div className="text">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero numquam porro aperiam vero eius nobis, dolorem sit corporis exercitationem cumque quis, quo deleniti. Soluta possimus tempora, culpa dolorem recusandae voluptatem unde aspernatur quod repudiandae illo error exercitationem autem vel aliquam minima ex eveniet rem maiores magni similique quibusdam animi eaque excepturi.</p>
            <p>Dolorum vero quod ut iusto velit voluptatibus ratione ipsa, molestiae asperiores iste suscipit exercitationem perferendis obcaecati tenetur praesentium expedita? Dolore asperiores voluptate itaque. Labore, quibusdam! Fugit minima tempore laboriosam, quae repellat corporis soluta blanditiis aliquid harum est veritatis veniam modi illo voluptates quos, beatae iusto maiores? Velit, nobis sit.</p>
          </div>
        </div>

        <div className="Catalogue" id='Catalogue'>
          <div className="title">
            <h2>AUNTUMN</h2>
            <h1>Popular Catologue:</h1>
          </div>
          <div className="container">
            <div className="card">
              <img src={Actor3} alt="" />
            </div>
            <div className="card">
              <img src={Actor4} alt="" />
            </div>
            <div className="card">
              <img src={Actor5} alt="" />
            </div>
          </div>
        </div>

        <div className="box1"></div>


        <div className="Contact" id='Contact'>
          <div className="section1">
            <h1>How Can We Help Today?</h1>
            <h2>Get Special Offer Today!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, placeat.</p>
            <button>Contact Now</button>
          </div>
          <div className="section2">
            <div className="image"></div>
            <div className="text">
              <h1>Contact Us:</h1>
              <div className="list">
                <li>Address: 123 Main St, Anytown, USA</li>
                <li>Phone: 555-555-5555</li>
                <li>Email: [info@yourdomain.com](mailto:info@yourdomain.com)</li>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
