import Link from 'next/link';
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta';
import { currentUser } from '@clerk/nextjs/app-beta';
import { auth } from '@clerk/nextjs/app-beta';

export default async function Home() {
    const user = await currentUser();
    const authData = auth();

    return (
        <main>
            <h1>Next.js 13 with Clerk</h1>
            <pre>User info:</pre>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <pre>Auth info:</pre>
            <pre>{JSON.stringify(authData, null, 2)}</pre>

            {/* this is from docs sample: */}
            <SignedIn>
                <p>You are signed in!</p>
            </SignedIn>
            <SignedOut>
                <p>You are signed out!</p>
                <Link href="/sign-in">Sign In</Link>
            </SignedOut>

        </main>
    );
}
