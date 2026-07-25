# Wang Chenghao · personal homepage

A small, framework-free résumé site for [henrywch.github.io](https://henrywch.github.io/).

The homepage follows a single scroll: introduction → education and grade → research experience → selected projects → MOSS-Video-Preview paper → contact links. The future demo entry is intentionally disabled and marked “To be continued.”

## Local preview

From this directory:

```powershell
python -m http.server 4173
```

Open <http://127.0.0.1:4173/>.

## Publish with GitHub Pages

1. On GitHub, create an empty **public** repository named exactly `henrywch.github.io` under the `henrywch` account. Leave README, `.gitignore`, and license unchecked.
2. In this directory, run:

   ```powershell
   git init -b main
   git add index.html styles.css script.js favicon.svg README.md
   git commit -m "Create personal homepage"
   git remote add origin https://github.com/henrywch/henrywch.github.io.git
   git push -u origin main
   ```

3. If Git Credential Manager opens a GitHub sign-in window, complete the sign-in in the browser it opens. If the callback reports that a localhost login page cannot be opened, open `https://github.com/login` in a normal browser first, then retry the push; a GitHub personal access token can also be used when Git asks for a password.
4. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, and save.
5. After the workflow finishes, visit <https://henrywch.github.io/>.

## Public links

- Paper: [MOSS-Video-Preview](https://arxiv.org/abs/2606.07639)
- Official code: [OpenMOSS/MOSS-Video-Preview](https://github.com/OpenMOSS/MOSS-Video-Preview)
- Models: [Hugging Face collection](https://huggingface.co/collections/OpenMOSS-Team/moss-video-preview)

## Privacy

The site includes the email address the owner requested. It intentionally excludes the phone number, birth date, gender, political status, student ID, portrait, and the original résumé PDF. Review any future contact or CV additions before publishing.
