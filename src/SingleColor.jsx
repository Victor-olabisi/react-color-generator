import { toast } from "react-toastify";
const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
    const saveToClipboard = async() => {
        if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(`#${hex}`) 
            toast.success('color copied to clipboard sucessfully')
        } catch (error) {
            toast.error('unable to copy to clipboard')
        }
        }
        else {
            toast.error('clipboard acces not available')
    }
}
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
          style={{ background: `#${hex}` }}
          onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
