import * as React from "react"
import moment from 'moment'

const year = moment(new Date()).format('YYYY');

const Footer = ({ siteTitle }) => (
  <footer class="bg-dark">
    <div class="border-top text-center border-dark py-3">
      <p class="mb-0 text-light">
        Copyright &copy; {year}
      </p>
    </div>
  </footer>
)

export default Footer
