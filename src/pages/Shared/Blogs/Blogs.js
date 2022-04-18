import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='first-styles'>
                <h3>quesion:-1, Authentication </h3>
                <p>
                    Authentication is about validating your credentials like User Name/User ID and password to verify your identity. We use the OpenID Connect protocol for that. You can manage your authentication by clicking on My Account link in the upper right corner.
                </p>
                <h3>Authorization</h3>
                <p>Authorization, on the other hand, occurs after your identity is successfully authenticated by cloudHQ. Then you can give permission to cloudHQ to access the resources such as files, emails. This is handled with the OAuth2 protocol. In simple terms, authorization gives our system the ability to access your data in the cloud. So you need to authorize access of Box and Google Drive as admin@. The authorizations are done under the Cloud Accounts tab.</p>
            </div>
            <div className='first-styles'>
                <h3>ques:2-  Why are you using firebase</h3>
                <p>Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you.

                    Therefore, implementing Firebase means plugging a ready-made backend into your client code to make it dynamic. Ultimately, it eliminates the need to write backend code from scratch and gives you a fully functional one instead.
                    You sent
                    Security-wise, it also has explicitly built-in security rules that make it a trusted data and server handler. Plus, you get a protected backend when you use these rules.
                    You sent
                    Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.

                    You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.</p>
                <h3>What other options do you have to implement authentication</h3>
                <p>
                    Authentication is used by a server when the server needs to know exactly who is accessing their information or site.
                    Authentication is used by a client when the client needs to know that the server is system it claims to be.
                    In authentication, the user or computer has to prove its identity to the server or client.
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity (such as a bank) that the client expects it to.
                    Authentication does not determine what tasks the individual can do or what files the individual can see. Authentication merely identifies and verifies who the person or system is</p>

            </div>
            <div className='first-styles'>
                <h3> ques:-3, What other services does firebase provide other than authentication</h3>
                <p>goal of every developer is to create awesome apps.  If you’re a developer, we are here to help you discover some of the best alternatives to Firebase to help take your mobile app development a notch higher.


                    Firebase continues to innovate and dominate the backend as a service (BaaS) market. It has grown so much that it has become a key component of Google’s mobile strategy. I was a Firebase enthusiastic user in the past, but my concerns about its complexity and cost led me to explore other cloud alternatives.

                    While Firebase offers an increasingly sophisticated array of services that takes care of various development requirements, it’s not always the easiest, fastest, or most affordable option. The article “Reasons Not to Use Firebase” also enlightened me about the risks of using Firebase.

                    In addition to some first-tier competitors such as Parse, the number of cloud providers has increased significantly.  These companies provide services that benefit small developers in unique ways, such as user-friendliness and affordability.

                    In this tutorial, you will learn about multiple Firebase competitors. Some are relatively new companies but still provide useful services to developers. The tutorial will cover the following competitors:</p>
            </div>
        </div>
    );
};

export default Blogs;