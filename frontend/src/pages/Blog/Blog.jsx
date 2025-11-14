import "./Blog.scss"
import Navbar from "../../components/Navbar/Navbar"

const Blog = () => {
  return (
    <section className="container__pages blog">
      <Navbar />
      <div className="blog__body">
        <h1>Blog</h1>
      </div>
    </section>
  )
}

export default Blog
