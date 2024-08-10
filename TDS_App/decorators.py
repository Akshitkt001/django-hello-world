from django.shortcuts import redirect

def login_required(view_func):
    def wrapper(request, *args, **kwargs):
        if not request.user.is_authenticated:
            return redirect('login')  # Replace 'login' with the name of your login URL
        return view_func(request, *args, **kwargs)

    return wrapper