export default function Picture(props) {
    const { name, url } = props;
    return (
      <div>
        <img src={url} alt={name} />
      </div>
    );
  }