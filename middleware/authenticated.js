export default function({ store, redirect }) {
    // If the user is not authenticated
    if (localStorage.getItem("auth") == null) {
        return redirect('/login')
    }
}