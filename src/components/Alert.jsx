import Alert from 'react-bootstrap/Alert';




function Aff() {
  return (
    <>
      {[
        'primary',
      ].map((variant) => (
        <Alert style={{marginRight:'50%'}} key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default Aff;