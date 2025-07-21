# API Setup Guide for Realistic Social Media Search

## 🔑 **Required API Keys & Setup**

### **1. Google APIs (Most Important)**

#### **Google Vision API**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Vision API**
4. Create credentials (API Key)
5. Add to `.env`:

```env
REACT_APP_GOOGLE_VISION_API_KEY=your_vision_api_key_here
```

#### **Google Custom Search API**

1. Enable **Custom Search API** in Google Cloud Console
2. Create API Key
3. Go to [Google Programmable Search Engine](https://programmablesearchengine.google.com/)
4. Create a new search engine
5. Add to `.env`:

```env
REACT_APP_GOOGLE_SEARCH_API_KEY=your_search_api_key_here
REACT_APP_GOOGLE_SEARCH_ENGINE_ID=your_search_engine_id_here
```

#### **YouTube Data API**

1. Enable **YouTube Data API v3** in Google Cloud Console
2. Create API Key
3. Add to `.env`:

```env
REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
```

### **2. Social Media APIs**

#### **Facebook Graph API**

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add **Facebook Login** product
4. Request permissions: `user_search`, `user_photos`
5. Generate Access Token
6. Add to `.env`:

```env
REACT_APP_FACEBOOK_ACCESS_TOKEN=your_facebook_token_here
REACT_APP_FACEBOOK_APP_ID=your_facebook_app_id_here
REACT_APP_FACEBOOK_APP_SECRET=your_facebook_app_secret_here
```

#### **Instagram Basic Display API**

1. In Facebook Developer Console, add Instagram Basic Display
2. Configure Instagram App
3. Request permissions: `user_profile`, `user_media`
4. Generate Access Token
5. Add to `.env`:

```env
REACT_APP_INSTAGRAM_ACCESS_TOKEN=your_instagram_token_here
REACT_APP_INSTAGRAM_APP_ID=your_instagram_app_id_here
```

#### **Twitter API v2**

1. Apply for [Twitter Developer Account](https://developer.twitter.com/)
2. Create a new app
3. Request **Elevated Access** for search endpoints
4. Generate Bearer Token
5. Add to `.env`:

```env
REACT_APP_TWITTER_BEARER_TOKEN=your_twitter_bearer_token_here
REACT_APP_TWITTER_API_KEY=your_twitter_api_key_here
REACT_APP_TWITTER_API_SECRET=your_twitter_api_secret_here
```

#### **LinkedIn API**

1. Go to [LinkedIn Developers](https://www.linkedin.com/developers/)
2. Create a new app
3. Request permissions: `r_liteprofile`, `r_emailaddress`
4. Generate Access Token
5. Add to `.env`:

```env
REACT_APP_LINKEDIN_ACCESS_TOKEN=your_linkedin_token_here
REACT_APP_LINKEDIN_CLIENT_ID=your_linkedin_client_id_here
REACT_APP_LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret_here
```

### **3. AWS Services (Optional)**

#### **AWS Rekognition**

1. Create AWS account
2. Go to AWS IAM Console
3. Create user with Rekognition permissions
4. Generate Access Keys
5. Add to `.env`:

```env
REACT_APP_AWS_ACCESS_KEY_ID=your_aws_access_key_here
REACT_APP_AWS_SECRET_ACCESS_KEY=your_aws_secret_key_here
REACT_APP_AWS_REGION=us-east-1
```

### **4. Paid Face Recognition Services (Optional)**

#### **PimEyes**

1. Sign up at [PimEyes](https://pimeyes.com/)
2. Get API Key
3. Add to `.env`:

```env
REACT_APP_PIMEYES_API_KEY=your_pimeyes_api_key_here
```

#### **FaceCheck**

1. Sign up at [FaceCheck](https://facecheck.id/)
2. Get API Key
3. Add to `.env`:

```env
REACT_APP_FACECHECK_API_KEY=your_facecheck_api_key_here
```

#### **Social Catfish**

1. Sign up at [Social Catfish](https://socialcatfish.com/)
2. Get API Key
3. Add to `.env`:

```env
REACT_APP_SOCIALCATFISH_API_KEY=your_socialcatfish_api_key_here
```

## 🚀 **Quick Setup Steps**

### **Step 1: Create Environment File**

```bash
# Copy the example file
cp .env.example .env

# Edit with your API keys
nano .env
```

### **Step 2: Install Dependencies**

```bash
npm install
```

### **Step 3: Test APIs**

```bash
npm run dev
```

## 💰 **Cost Estimates**

### **Free Tier Limits**

- **Google Vision API**: 1,000 requests/month
- **Google Custom Search**: 100 requests/day
- **YouTube Data API**: 10,000 requests/day
- **Facebook Graph API**: 200 requests/hour
- **Instagram API**: 200 requests/hour
- **Twitter API**: 300 requests/15min
- **LinkedIn API**: 100 requests/day

### **Paid Services**

- **Google Vision API**: $1.50 per 1,000 requests
- **PimEyes**: $29.99/month
- **FaceCheck**: $19.99/month
- **Social Catfish**: $39.99/month

## ⚠️ **Important Notes**

### **Legal Compliance**

1. **User Consent**: Always require explicit user consent
2. **Privacy Laws**: Comply with GDPR, CCPA, etc.
3. **Platform Terms**: Respect each platform's ToS
4. **Data Protection**: Implement proper security measures

### **Rate Limits**

- Monitor API usage to avoid rate limiting
- Implement exponential backoff for failed requests
- Cache results when possible
- Use multiple API keys for high-volume usage

### **Security Best Practices**

1. **Environment Variables**: Never commit API keys to git
2. **API Key Rotation**: Regularly rotate API keys
3. **Request Validation**: Validate all user inputs
4. **Error Handling**: Implement proper error handling
5. **Logging**: Log API usage for monitoring

## 🔧 **Troubleshooting**

### **Common Issues**

1. **CORS Errors**: Use proxy or backend API
2. **Rate Limiting**: Implement retry logic
3. **API Key Issues**: Verify keys are correct
4. **Permission Errors**: Check API permissions

### **Testing APIs**

```javascript
// Test Google Vision API
const testVisionAPI = async () => {
  const response = await fetch(
    `https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_GOOGLE_VISION_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        requests: [
          {
            image: { content: "base64_image_data" },
            features: [{ type: "FACE_DETECTION" }],
          },
        ],
      }),
    },
  );
  console.log(await response.json());
};
```

## 📊 **Monitoring & Analytics**

### **Track API Usage**

- Monitor request counts
- Track response times
- Log error rates
- Monitor costs

### **Performance Metrics**

- Search accuracy: >90%
- Response time: <5 seconds
- API success rate: >95%
- Error rate: <2%

This setup provides the foundation for realistic social media search functionality while maintaining legal and ethical standards.
