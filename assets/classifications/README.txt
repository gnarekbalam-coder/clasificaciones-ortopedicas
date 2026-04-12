Place custom classification images in this folder.

File naming rule:
- Use the classification id from app.js
- Save each image as JPG

Examples:
- allman.jpg
- neer-clavicle.jpg
- rockwood.jpg
- garden.jpg
- schatzker.jpg
- delbet.jpg
- ogden.jpg
- weiss.jpg
- bado.jpg
- lund-browder.jpg
- rule-of-nines.jpg
- robinson.jpg
- hertel.jpg
- codman.jpg
- mayo-fjd.jpg
- three-column-distal-humerus.jpg
- pelvic-parameters.jpg
- melone.jpg
- kleinert-verdan.jpg
- al-qattan.jpg
- ficat-arlet.jpg
- tonnis.jpg
- meyers-mckeever.jpg
- lachman-grading.jpg
- kellgren-lawrence.jpg
- insall-salvati.jpg
- caton-deschamps.jpg
- dejour.jpg
- haraguchi.jpg
- bartonicek.jpg
- mason-ankle.jpg
- syndesmosis-measures.jpg
- asia.jpg
- essex-lopresti.jpg
- sneppen.jpg
- lawrence-botte.jpg

If you want more than one image for the same classification:
- Keep the files in this folder
- Add the extra file names in `imageManifest` inside `app.js`

Examples:
- "salter-harris": ["assets/classifications/salter-harris-1.jpg", "assets/classifications/salter-harris-2.jpg"]
- "delbet": ["assets/classifications/delbet-1.jpg", "assets/classifications/delbet-2.jpg"]

How it works:
- If the JPG exists, the app shows your real image
- If it does not exist, the app falls back to the generated placeholder image
