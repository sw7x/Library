<?php

namespace App\Http\Requests;

use App\Exceptions\CustomException;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;


class TeacherRegFormRequest extends FormRequest
{
    public $validator = null;


    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'full_name'         => 'required|min:3',
            'email'             => 'required|email|unique:users,email',
            'password'          => 'required|min:6|max:12',
            'confirm_password'  => 'required|same:password',
        ];
    }




    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'full_name.required'       => 'Full name field is required.',
            'full_name.min'            => 'Full name minimum length must be greater than 3 characters.',

            'email.required'            => 'Email field is required.',
            'email.email'               => 'Email field does not contain valid email.',
            'email.unique'              => 'Email already exists.',

            'password.required'         => 'Password field is required.',
            'password.min'              => 'Password field minimum length must be greater than 6 characters.',
            'password.max'              => 'Password field maximum length must be less than 12 characters.',

            'confirm_password.required' => 'Confirm password field is required.',
            'confirm_password.same'     => 'Confirm password and password should be same.',
        ];
    }

    protected function failedValidation(Validator $validator) {

        //dd($validator->errors());


        //dd($validator->messages()->all());

        //$errorString = implode(", ",$validator->messages()->all());
        //dd($errorString);

        $this->validator = $validator;


        //throw new CustomException('ddd',400);
//        try{
//            $allErrors = $validator->messages()->all();
//            throw new CustomException($allErrors[0],400);
//        }
//        catch (CustomException $e) {
//
//            $response = array(
//                'status'    => '77 Error',
//                'message'   => $e->getMessage(),
//            );
//            $code = $e->getCode() ?? 500;
//            return response()->json($response, $code);
//        }


        //dd('8889');
        //throw new HttpResponseException(response()->json('iio', 422));
        //throw new HttpResponseException(response()->json($validator->errors(), 422));
    }






}
