<svelte:head
  ><script
    src="https://kwes.io/v2/kwes-script.js"
    defer={true}
  ></script>
  <title>Contact - Techmen Robotics - FRC Team 5669</title>
</svelte:head>
<h2>Contact</h2>

<div class="contact-link">
  <p>Email:</p>
  <a href="mailto:frcteam5669@gmail.com">frcteam5669@gmail.com</a>
</div>
<p style="margin-bottom: 15px; text-align: center">
  Have questions? Wan<a
    class="easteregg"
    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">'</a
  >t to learn more about our team? Feel free to contact us here!
</p>
<form
  class="kwes-form"
  action="https://kwes.io/api/foreign/forms/E50CECf62R7XGopmR31R"
  target="_blank"
  method="post"
  novalidate={true}
>
  <div
    class="kw-alert kw-alert-success"
    id="kw-success"
    aria-live="assertive"
    style="display: none"
  />
  <div class="form-inline">
    
    <input type="text" name="subject" placeholder="Subject" rules="required" />
  </div>
  <div class="form-inline">
    <input type="text" name="name" placeholder="Name" rules="required" />
  </div>

  <div class="form-inline">
  <input type="email" name="email" placeholder="Email" rules="required" />
  </div>
  <div style="width: 100%; max-width: 100%">
    <textarea name="message" placeholder="Message" rules="required" />
  </div>
  <br />
  <button type="submit" class="yellow-btn">Submit</button>
</form>

<style>
  .contact-link {
    margin: auto;
    width: fit-content;
  }
  .contact-link * {
    display: inline-block;
  }
  .easteregg:before {
    content: none;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    gap:30px;
    justify-content: center;
  }
  .form-inline {
    width: 45%;
    flex-shrink: 1 !important;
    flex-grow: 1 !important;
  }
  textarea {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
  input[type="text"],
  input[type="email"],
  textarea {
    flex-shrink: 0;
    background: transparent;
    border: none;
    border: 2px dashed var(--gray500);
    border-bottom: 2px solid var(--gray500);
    color: var(--white);
    margin: 0;
    text-align: left;
    width: 100%;
    display: block;
    padding: 15px;
    box-sizing: border-box;
  }
</style>
