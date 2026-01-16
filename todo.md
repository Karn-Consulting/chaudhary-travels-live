# Chaudhary Travels Website Tasks

- [x] Initial Project Setup
- [x] Basic Pages Implementation
- [ ] **Emergency Redesign**
    - [ ] **Images**:
        - [ ] Generate high-quality hero image (Luxury fleet, Indian context)
        - [ ] Generate/Find Tempo Traveller image
        - [ ] Generate/Find Luxury Bus image
        - [ ] Generate/Find Luxury Car image
        - [ ] Fix Nitin's photo aspect ratio/cropping
        - [ ] Fix Logo distortion
        - [ ] Add missing testimonial images
    - [ ] **Design & Theme**:
        - [ ] Update Color Palette: Exact match to Logo Gold (#D4AF37) & Cream (#F9F9F7)
        - [ ] Fix Typography: Ensure proper hierarchy, remove "messy" fonts, stick to Playfair Display (Headings) & Inter (Body)
        - [ ] Redesign Footer: Make it luxurious (Dark Navy/Gold theme)
    - [ ] **Layout**:
        - [ ] Fix "randomly thrown fonts" issue
        - [ ] Ensure all sections blend seamlessly
- [ ] Final Polish
- [ ] Push to GitHub

- [ ] **Critical Fixes (Phase 2)**
    - [ ] **Color Matching**:
        - [ ] Extract exact background color from logo image
        - [ ] Update `index.css` `--background` and `--cream-bg` variables
        - [ ] Ensure logo blends seamlessly (transparent background or matching hex)
    - [ ] **Mobile Responsiveness**:
        - [ ] Audit `Header.tsx` for mobile menu
        - [ ] Audit `Home.tsx` hero section text sizing on mobile
        - [ ] Audit `Footer.tsx` stacking on mobile
        - [ ] Fix padding/margins on small screens

- [ ] **Deployment (Phase 3)**
    - [ ] Install Vercel CLI
    - [ ] Deploy to Vercel with new project name `chaudhary-travels-luxury-concierge`
    - [ ] Verify deployment URL

- [ ] **Fix React Errors (Phase 4)**
    - [ ] Fix nested `<a>` tags in `Footer.tsx`
    - [ ] Audit `Home.tsx` for similar nesting issues
    - [ ] Verify fix with `webdev_check_status`

- [ ] **Verification (Phase 5)**
    - [ ] Check public access to `https://chaudhary-travels-luxury-concierge.vercel.app`
    - [ ] Verify no login is required
    - [ ] Confirm layout and images load correctly

- [ ] **Performance & Domain (Phase 6)**
    - [ ] Audit image sizes in `client/public/images`
    - [ ] Optimize images (convert to WebP, resize)
    - [ ] Update code references to new image formats
    - [ ] Configure `xulr21.shop` domain on Vercel
    - [ ] Verify SSL and DNS propagation

- [ ] **DNS Configuration (Phase 7)**
    - [ ] Create Python script to update GoDaddy DNS
    - [ ] Update A record to `76.76.21.21` (Vercel)
    - [ ] Update CNAME record to `cname.vercel-dns.com`
    - [ ] Verify propagation

- [ ] **Crash Debugging (Phase 8)**
    - [ ] Run `npm run build` locally to check for build errors
    - [ ] Check browser console for runtime errors
    - [ ] Fix identified crash issues
    - [ ] Redeploy and verify

- [ ] **GoDaddy Analysis (Phase 9)**
    - [ ] View screenshot to understand current DNS state
    - [ ] Provide clear, step-by-step instructions to user
    - [ ] Verify Vercel deployment status

- [ ] **Vercel Config Fix (Phase 10)**
    - [ ] Create `vercel.json` with correct build and route settings
    - [ ] Redeploy to Vercel
    - [ ] Verify site loads correctly (no raw code)

- [ ] **Static Site Conversion (Phase 11)**
    - [ ] Delete `server` directory
    - [ ] Remove backend dependencies from `package.json`
    - [ ] Update `package.json` scripts for static build only
    - [ ] Redeploy to Vercel to force static serving
