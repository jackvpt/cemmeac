import "./Blog.scss"
import Header from "../../components/Header/Header"

const Blog = () => {
  return (
    <section className="container__pages blog">
      <img
        className="img__logo"
        src="/images/sticker_rounded.webp"
        alt="CEMMEA Logo"
      />
      <Header />
      <div className="blog__body">
        <h1>Blog</h1>
      </div>
    </section>
  )
}

export default Blog
