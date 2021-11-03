const React = require('react');

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    setHeadComponents([
        <script 
            key="1"
            src="/scripts/jquery.min.js" 
            type="text/javascript">
        </script>,
        <script 
            key="2"
            src="/scripts/bootstrap.min.js" 
            type="text/javascript">
        </script>,
        <script 
            key="3"
            src="/scripts/slick.min.js" 
            type="text/javascript">
        </script>,
        <script 
            key="4"
            src="/scripts/shuffle.min.js" 
            type="text/javascript">
        </script>,
        <script 
            key="5"
            src="/scripts/script.js" 
            type="text/javascript">
        </script>
    ])
}