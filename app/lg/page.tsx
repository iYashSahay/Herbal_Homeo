export default function LgPage() {
  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "#f0f0f0",
        }}
      >
        <div>
          <img src="logo.png" alt="Logo" style={{ height: "40px" }} />
        </div>
        <div>
          <a href="index.html" style={{ marginRight: "1rem" }}>
            Data
          </a>
          <a href="records.html" style={{ marginRight: "1rem" }}>
            Records
          </a>
          <a href="message.html">Message</a>
        </div>
      </nav>

      {/* Data Form */}
      <main style={{ padding: "2rem" }}>
        <h1>Patient Data Entry Form</h1>
        <form action="#" method="POST" style={{ marginTop: "1rem", maxWidth: "600px" }}>
          <label>
            Name:<br />
            <input type="text" name="name" required />
          </label>
          <br />
          <br />

          <label>
            Age:<br />
            <input type="number" name="age" required />
          </label>
          <br />
          <br />

          <label>
            Sex:<br />
            <select name="sex" required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />
          <br />

          <label>
            Date:<br />
            <input type="date" name="date" required />
          </label>
          <br />
          <br />

          <label>
            Registration Number:<br />
            <input type="text" name="registration" required />
          </label>
          <br />
          <br />

          <label>
            Phone Number:<br />
            <input type="tel" name="phone" required />
          </label>
          <br />
          <br />

          <label>
            Complaint:<br />
            <input type="text" name="complaint" />
          </label>
          <br />
          <br />

          <label>
            Medicine:<br />
            <input type="text" name="medicine" />
          </label>
          <br />
          <br />

          <label>
            Other Info:<br />
            <textarea name="other" rows={4}></textarea>
          </label>
          <br />
          <br />

          <label>
            Address:<br />
            <textarea name="address" rows={3} required></textarea>
          </label>
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}