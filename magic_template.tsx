<!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign In to Take a Hike</title>
  </head>
  <body
    style="
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: #CBEAD1;
      margin: 0;
      padding: 0;
    "
  >
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="max-width: 480px; margin: auto; padding: 32px 16px"
    >
      <tr>
        <td
          style="
            background-color: #ffffff;
            border-radius: 16px;
            padding: 32px 24px;
            box-shadow: 0 4px 12px rgba(78, 88, 81, 0.1);
            text-align: center;
          "
        >
          <h1
            style="
              color: #2D4238;
              font-size: 24px;
              margin-bottom: 16px;
            "
          >
            Sign In to Take a Hike
          </h1>
          <p
            style="
              color: #407B57;
              font-size: 16px;
              line-height: 1.5;
              margin-bottom: 24px;
            "
          >
            Tap the button below to sign in instantly to
            <strong style="color: #2D4238">Take a Hike</strong> using your magic link.
          </p>

          <a
            href="{{ .ConfirmationURL }}"
            target="_blank"
            style="
              display: inline-block;
              padding: 14px 28px;
              background-color: #407B57;
              color: #ffffff;
              font-size: 16px;
              font-weight: bold;
              border-radius: 12px;
              text-decoration: none;
              margin-bottom: 24px;
            "
            >Sign In</a
          >

          <p style="font-size: 14px; color: #A0C4B8; margin-bottom: 24px">
            Or enter this code in the app:
          </p>

          <p
            style="
              font-size: 22px;
              font-weight: bold;
              color: #2D4238;
              letter-spacing: 4px;
              margin-bottom: 32px;
            "
          >
            {{ .Token }}
          </p>

          <p style="font-size: 14px; color: #A0C4B8">
            If you didn’t request this, you can safely ignore it.
          </p>

          <p style="font-size: 12px; color: #A0C4B8; margin-top: 32px">
            &copy; 2025 Take a Hike. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
