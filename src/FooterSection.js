export default function FooterSection() {
  return (
    <div className="Footer">
      <h1 className="message">SUBSCRIBE TO OUR EMAIL LIST</h1>
      <form>
        <label>
          <input
            className="email-input"
            type="email"
            placeholder="What's your email?"
            onfocus="this.placeholder=''"
          />
        </label>
      </form>
      <button className="button-input" type="submit">
        Submit
      </button>
    </div>
  );
}
