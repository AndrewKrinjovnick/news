import React from "react";


class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false };

   }

   static getDerivedStateFromError() {
      return { hasError: true };
   }

   render() {
      if (this.state.hasError) {
         return (
            <h2>Сталася помилка, спробуйте оновити сторінку.</h2>
         )
      }
      return this.props.children;
   }

}

export default ErrorBoundary;